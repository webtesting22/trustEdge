import React, { useState } from 'react'
import { Layout, Collapse, Card, Button, Typography, Row, Col, Space, Grid, Modal, Tree } from 'antd';
import { FolderOpenOutlined, FilePdfOutlined, EyeOutlined, DownloadOutlined, FilterOutlined } from '@ant-design/icons';
import "./InvestorRelation.css"
import investorRelationData from './InvestorRelationData'

const { Sider, Content } = Layout;
const { Panel } = Collapse;
const { Title } = Typography;
const { useBreakpoint } = Grid;

// Helper to get files for selected folder path
const getFilesForPath = (data, path) => {
    if (!path.length) return [];
    let current = data;
    for (let name of path) {
        const found = current.find(f => f.name === name);
        if (!found) return [];
        if (name === path[path.length - 1]) {
            return found.files || [];
        }
        current = found.children || [];
    }
    return [];
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

// Recursive AntD Collapse for Folder Tree with files inside
const FolderCollapse = ({ data, onSelect, selectedPath = [] }) => (
    <Collapse bordered={false} accordion activeKey={selectedPath[0]}>
        {data.map((folder, idx) => (
            <Panel
                header={<span><FolderOpenOutlined /> {folder.name}</span>}
                key={folder.name}
                onClick={e => { e.stopPropagation(); onSelect([folder.name]); }}
            >
                {/* Show files for this folder */}
                {folder.files && folder.files.length > 0 && (
                    <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
                        {folder.files.map((file, fidx) => (
                            <Col xs={24} sm={12} md={8} lg={24} key={file.name + fidx}>
                                <Card
                                    title={<span><FilePdfOutlined style={{ color: '#cf1322' }} /> {file.name}</span>}
                                    // actions={[]}
                                    bodyStyle={{ padding: 0 }}
                                    hoverable
                                    className='pdf-card'
                                >
                                    {/* <Space direction="vertical" size="small">
                    <Typography.Text type="secondary" style={{ fontSize: 12 }}>PDF Document</Typography.Text>
                  </Space> */}
                                </Card>
                            </Col>
                        ))}
                    </Row>
                )}
                {/* Render subfolders recursively */}
                {folder.children && <FolderCollapse data={folder.children} onSelect={subPath => onSelect([folder.name, ...subPath])} selectedPath={selectedPath.slice(1)} />}
            </Panel>
        ))}
    </Collapse>
);

// Recursive Collapse for Modal (mobile) category selection
const ModalFolderCollapse = ({ data, onSelect, selectedPath = [], parentPath = [] }) => (
    <Collapse bordered={false} accordion activeKey={selectedPath[0]}>
        {data.map((folder, idx) => {
            const currentPath = [...parentPath, folder.name];
            const isSelected = JSON.stringify(currentPath) === JSON.stringify(selectedPath);
            return (
                <Panel
                    header={
                        <span style={{ fontWeight: isSelected ? 600 : 400, color: isSelected ? '#1677ff' : undefined }}>
                            <FolderOpenOutlined /> {folder.name}
                        </span>
                    }
                    key={folder.name}
                    onClick={e => {
                        e.stopPropagation();
                        onSelect(currentPath);
                    }}
                >
                    {/* Show files for this folder */}
                    {folder.files && folder.files.length > 0 && (
                        <Row style={{ marginBottom: 16 }}>
                            {folder.files.map((file, fidx) => (
                                <Col xs={24} key={file.name + fidx}>
                                    <Card
                                        title={<span><FilePdfOutlined style={{ color: '#cf1322' }} /> {file.name}</span>}
                                        bodyStyle={{ padding: 0 }}
                                        hoverable
                                        className='pdf-card'
                                    >
                                        {/* <Space direction="vertical" size="small">
                      <Typography.Text type="secondary" style={{ fontSize: 12 }}>PDF Document</Typography.Text>
                    </Space> */}
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    )}
                    {/* Subfolders */}
                    {folder.children && (
                        <ModalFolderCollapse data={folder.children} onSelect={onSelect} selectedPath={selectedPath.slice(1)} parentPath={currentPath} />
                    )}
                </Panel>
            );
        })}
    </Collapse>
);

const InvestorRelation = () => {
    const [selectedPath, setSelectedPath] = useState(
        investorRelationData.length > 0 ? [investorRelationData[0].name] : []
    );
    const files = getFilesForPath(investorRelationData, selectedPath);
    const screens = useBreakpoint();

    // Modal state for mobile filter
    const [filterModalOpen, setFilterModalOpen] = useState(false);
    const treeData = buildTreeData(investorRelationData);
    const [modalSelected, setModalSelected] = useState(selectedPath);

    const handleApplyFilter = () => {
        setSelectedPath(modalSelected);
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
                        width={screens.xs ? '100%' : 400}
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
                            Investor Relations Documents
                        </Title>
                        <FolderCollapse data={investorRelationData} onSelect={setSelectedPath} selectedPath={selectedPath} />
                    </Sider>
                    <Layout>
                        <Content className='InvestorRelationContent' style={{ padding: screens.xs ? 8 : 24 }}>
                            <Title level={4} style={{ marginBottom: 16, fontSize: screens.xs ? 18 : 24 }}>Documents</Title>
                            <Row gutter={[16, 16]}>
                                {files.length === 0 && (
                                    <Col span={24}><Typography.Text type="secondary">Select a folder to view documents.</Typography.Text></Col>
                                )}
                                {files.map((file, idx) => (
                                    <Col xs={24} sm={12} md={8} lg={8} key={file.name + idx}>
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
                    {/* Modal for Category Selection (Accordion) */}
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
                        <ModalFolderCollapse
                            data={investorRelationData}
                            onSelect={path => setModalSelected(path)}
                            selectedPath={modalSelected}
                        />
                    </Modal>
                </Layout>
            </div>
        </section>
    )
}

export default InvestorRelation