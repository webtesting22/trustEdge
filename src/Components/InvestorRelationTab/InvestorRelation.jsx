import React, { useState } from 'react'
import { Layout, Collapse, Card, Button, Typography, Row, Col, Space, Grid, Modal, Tree } from 'antd';
import { FolderOpenOutlined, FilePdfOutlined, EyeOutlined, DownloadOutlined, FilterOutlined } from '@ant-design/icons';
import "./InvestorRelation.css"
import investorRelationData from './InvestorRelationData'

const { Sider, Content } = Layout;
const { Panel } = Collapse;
const { Title } = Typography;
const { useBreakpoint } = Grid;

// Helper to get all files and subfolders for a selected category
const getAllContentForCategory = (data, selectedCategory) => {
  const category = data.find(item => item.name === selectedCategory);
  if (!category) return { folders: [], files: [] };
  
  let allFolders = [];
  let allFiles = [];
  
  // Add direct files
  if (category.files) {
    allFiles = [...category.files];
  }
  
  // Add subfolders and their files
  if (category.children) {
    const processChildren = (children, parentPath = []) => {
      children.forEach(child => {
        const currentPath = [...parentPath, child.name];
        allFolders.push({
          name: child.name,
          path: currentPath,
          files: child.files || []
        });
        
        if (child.children) {
          processChildren(child.children, currentPath);
        }
      });
    };
    
    processChildren(category.children);
  }
  
  return { folders: allFolders, files: allFiles };
};

// Helper to build AntD Tree data from folder structure
const buildTreeData = (data, parentPath = []) => {
  return data.map(folder => {
    const currentPath = [...parentPath, folder.name];
    return {
      title: folder.name,
      key: JSON.stringify(currentPath),
      children: folder.children ? buildTreeData(folder.children, currentPath) : undefined,
    };
  });
};

const InvestorRelation = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    investorRelationData.length > 0 ? investorRelationData[0].name : null
  );
  const { folders, files } = getAllContentForCategory(investorRelationData, selectedCategory);
  const screens = useBreakpoint();

  // Modal state for mobile filter
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const treeData = buildTreeData(investorRelationData);
  const [modalSelected, setModalSelected] = useState(selectedCategory);

  const handleApplyFilter = () => {
    setSelectedCategory(modalSelected);
    setFilterModalOpen(false);
  };

  return (
    <section className="paddingTop">
      <div className="Container w-100">
        <div className="investor-header">
          <h1 className="text-center">Investor Relations</h1>
          <p className="text-center investor-subtitle">
            Access our latest reports, financial statements, and press releases. Stay informed about our company's performance and strategic direction.
          </p>
        </div>

        <Layout className='InvestorRelationContainer' style={{ minHeight: '60vh', background: '#fff' }}>
          <Sider
            width={screens.xs ? '100%' : 300}
            className='InvestorRelationSidebar'
            style={{
              background: '#f5f5f5',
              padding: screens.xs ? 12 : 24,
              position: screens.xs ? 'static' : 'sticky',
              top: 0,
              zIndex: 1,
              minHeight: screens.xs ? 'auto' : '60vh'
            }}
            breakpoint="md"
            collapsedWidth={screens.xs ? 0 : 80}
          >
            <Title level={4} style={{ marginBottom: 16, fontSize: screens.xs ? 18 : 24 }}>
              Categories
            </Title>
            <div className="category-list">
              {investorRelationData.map((category, idx) => (
                <div
                  key={category.name}
                  className={`category-item ${selectedCategory === category.name ? 'selected' : ''}`}
                  onClick={() => setSelectedCategory(category.name)}
                  style={{
                    padding: '12px 16px',
                    marginBottom: 8,
                    borderRadius: 8,
                    cursor: 'pointer',
                    backgroundColor: selectedCategory === category.name ? '#e6f4ff' : 'transparent',
                    border: selectedCategory === category.name ? '1px solid #1677ff' : '1px solid transparent',
                    transition: 'all 0.2s'
                  }}
                >
                  <FolderOpenOutlined style={{ marginRight: 8, color: selectedCategory === category.name ? '#1677ff' : '#666' }} />
                  {category.name}
                </div>
              ))}
            </div>
          </Sider>
          <Layout>
            <Content className='InvestorRelationContent' style={{ padding: screens.xs ? 8 : 24 }}>
              <Title level={4} style={{ marginBottom: 16, fontSize: screens.xs ? 18 : 24 }}>
                {selectedCategory} Documents
              </Title>
              <Row gutter={[16, 16]}>
                {/* Show subfolders */}
                {folders.map((folder, idx) => (
                  <Col xs={24} sm={12} md={8} lg={6} key={folder.name + idx}>
                    <Card
                      title={<span><FolderOpenOutlined style={{ color: '#52c41a' }} /> {folder.name}</span>}
                      hoverable
                      className='folder-card'
                      bodyStyle={{ padding: 8 }}
                    >
                      <Typography.Text type="secondary" style={{ fontSize: 12 }}>
                        {folder.files.length} document{folder.files.length !== 1 ? 's' : ''}
                      </Typography.Text>
                    </Card>
                  </Col>
                ))}
                {/* Show direct files */}
                {files.map((file, idx) => (
                  <Col xs={24} sm={12} md={8} lg={6} key={file.name + idx}>
                    <Card
                      title={<span><FilePdfOutlined style={{ color: '#cf1322' }} /> {file.name}</span>}
                      actions={[
                        <Button type="link" icon={<EyeOutlined />} href={file.path} target="_blank" rel="noopener noreferrer">Preview</Button>,
                        <Button type="link" icon={<DownloadOutlined />} href={file.path} download>Download</Button>
                      ]}
                      hoverable
                      className='pdf-card'
                      bodyStyle={{ padding: screens.xs ? 8 : 16 }}
                    >
                      <Space direction="vertical" size="small">
                        <Typography.Text type="secondary" style={{ fontSize: 12 }}>PDF Document</Typography.Text>
                      </Space>
                    </Card>
                  </Col>
                ))}
                {folders.length === 0 && files.length === 0 && (
                  <Col span={24}><Typography.Text type="secondary">No documents found in this category.</Typography.Text></Col>
                )}
              </Row>
            </Content>
          </Layout>
          {/* Floating Filter Button for Mobile */}
          {screens.xs && (
            <Button
              type="primary"
              shape="circle"
              icon={<FilterOutlined />}
              size="large"
              style={{
                position: 'fixed',
                left: 20,
                bottom: 20,
                zIndex: 1000,
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
              }}
              onClick={() => setFilterModalOpen(true)}
            />
          )}
          {/* Modal for Category Selection */}
          <Modal
            title="Select Category"
            open={filterModalOpen}
            onCancel={() => setFilterModalOpen(false)}
            onOk={handleApplyFilter}
            okText="Apply"
            cancelText="Cancel"
            centered
            bodyStyle={{ padding: 16 }}
            className="ir-tree-modal"
          >
            <div className="modal-category-list">
              {investorRelationData.map((category, idx) => (
                <div
                  key={category.name}
                  className={`modal-category-item ${modalSelected === category.name ? 'selected' : ''}`}
                  onClick={() => setModalSelected(category.name)}
                  style={{
                    padding: '12px 16px',
                    marginBottom: 8,
                    borderRadius: 8,
                    cursor: 'pointer',
                    backgroundColor: modalSelected === category.name ? '#e6f4ff' : 'transparent',
                    border: modalSelected === category.name ? '1px solid #1677ff' : '1px solid #d9d9d9',
                    transition: 'all 0.2s'
                  }}
                >
                  <FolderOpenOutlined style={{ marginRight: 8, color: modalSelected === category.name ? '#1677ff' : '#666' }} />
                  {category.name}
                </div>
              ))}
            </div>
          </Modal>
        </Layout>
      </div>
    </section>
  )
}

export default InvestorRelation