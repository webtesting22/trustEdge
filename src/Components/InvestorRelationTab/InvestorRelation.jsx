import React, { useState, useEffect } from 'react'
import { Layout, Card, Button, Typography, Row, Col, Grid, Modal, Tooltip, message } from 'antd';
import { FolderOpenOutlined, FilePdfOutlined, EyeOutlined, DownloadOutlined, FilterOutlined, ArrowLeftOutlined, CopyOutlined } from '@ant-design/icons';
import "./InvestorRelation.css"
import investorRelationData from './InvestorRelationData'
import { useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const { Sider, Content } = Layout;
const { Title } = Typography;
const { useBreakpoint } = Grid;

// Helper to get folder node by path
const getNodeByPath = (data, pathArr) => {
  if (!pathArr || pathArr.length === 0) return null;
  let node = data.find(item => item.name === pathArr[0]);
  for (let i = 1; i < pathArr.length; i++) {
    if (!node || !node.children) return null;
    node = node.children.find(child => child.name === pathArr[i]);
  }
  // Ensure node always has files and children arrays
  if (node) {
    if (!node.files) node.files = [];
    if (!node.children) node.children = [];
  }
  return node;
};

// Helper to recursively count all documents in a folder (including subfolders)
const getDocumentCount = (folderNode) => {
  if (!folderNode) return 0;
  let count = Array.isArray(folderNode.files) ? folderNode.files.length : 0;
  if (Array.isArray(folderNode.children)) {
    for (const child of folderNode.children) {
      count += getDocumentCount(child);
    }
  }
  return count;
};

// Helper to count immediate child folders
const getImmediateFolderCount = (folderNode) => {
  if (!folderNode || !Array.isArray(folderNode.children)) return 0;
  return folderNode.children.length;
};

// Helper to sort folders: year-like (e.g., '2024-25') descending, others A-Z
const yearLike = name => /^(\d{4}-\d{2}|\d{4}-\d{4}|\d{4})$/.test(name) || /\d{4}-\d{2}/.test(name);
const parseYear = name => {
  // Extract the first 4 digits as year
  const match = name.match(/(\d{4})/);
  return match ? parseInt(match[1], 10) : null;
};
const folderSort = (a, b) => {
  const aIsYear = yearLike(a.name);
  const bIsYear = yearLike(b.name);
  if (aIsYear && bIsYear) {
    // Descending by year
    return parseYear(b.name) - parseYear(a.name);
  }
  if (aIsYear) return -1;
  if (bIsYear) return 1;
  return a.name.localeCompare(b.name);
};

const InvestorRelation = () => {
  // Track the current folder path as an array
  const [folderPath, setFolderPath] = useState([
    investorRelationData.length > 0 ? investorRelationData[0].name : null
  ]);
  const screens = useBreakpoint();
  const location = useLocation();
  const navigate = useNavigate();

  // Modal state for mobile filter
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [modalSelected, setModalSelected] = useState(folderPath[0]);

  // Modal for deep-linked folder
  const [deepLinkModalOpen, setDeepLinkModalOpen] = useState(false);
  const [deepLinkFolderPath, setDeepLinkFolderPath] = useState([]); // initial path from URL
  const [modalNavPath, setModalNavPath] = useState([]); // navigation path inside modal

  // On mount, check for modalPath in URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const modalPath = params.get('modalPath');
    if (modalPath) {
      const arr = modalPath.split('/');
      setDeepLinkFolderPath(arr);
      setModalNavPath(arr);
      setDeepLinkModalOpen(true);
    } else {
      setDeepLinkModalOpen(false);
      setDeepLinkFolderPath([]);
      setModalNavPath([]);
    }
  }, [location.search]);

  // Get current node and its children/files
  const currentNode = getNodeByPath(investorRelationData, folderPath);
  const children = currentNode && currentNode.children ? currentNode.children : [];
  const files = currentNode && currentNode.files ? currentNode.files : [];

  // Sort categories, folders, and files
  const sortedCategories = investorRelationData.slice().sort((a, b) => a.name.localeCompare(b.name));
  const sortedChildren = children.slice().sort(folderSort);
  const sortedFiles = files.slice().sort((a, b) => a.name.localeCompare(b.name));

  // Scroll to top on folderPath change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [folderPath]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  // Handle sidebar category click
  const handleCategoryClick = (categoryName) => {
    setFolderPath([categoryName]);
  };

  // Handle folder card click
  const handleFolderClick = (folderName) => {
    setFolderPath([...folderPath, folderName]);
  };

  // Handle back button
  const handleBack = () => {
    if (folderPath.length > 1) {
      setFolderPath(folderPath.slice(0, -1));
    }
  };

  // Modal filter apply
  const handleApplyFilter = () => {
    setFolderPath([modalSelected]);
    setFilterModalOpen(false);
  };

  // Copy link handler for folder card
  const handleCopyLink = (folderPathArr) => {
    const pathString = folderPathArr.join('/');
    const url = `${window.location.origin}${location.pathname}?modalPath=${encodeURIComponent(pathString)}`;
    navigator.clipboard.writeText(url)
      .then(() => {
        message.success('Link copied to clipboard!', 1.5);
      })
      .catch(() => {
        message.error('Failed to copy link. Please copy manually.');
      });
  };

  // Close modal and clear modalPath from URL
  const handleDeepLinkModalClose = () => {
    setDeepLinkModalOpen(false);
    setDeepLinkFolderPath([]);
    setModalNavPath([]);
    const params = new URLSearchParams(location.search);
    params.delete('modalPath');
    navigate({ pathname: location.pathname, search: params.toString() }, { replace: true });
  };

  // Modal navigation: click folder inside modal
  const handleModalFolderClick = (folderName) => {
    setModalNavPath([...modalNavPath, folderName]);
  };

  // Modal navigation: back button
  const handleModalBack = () => {
    if (modalNavPath.length > deepLinkFolderPath.length) {
      setModalNavPath(modalNavPath.slice(0, -1));
    }
  };

  return (
    <section className="paddingTop InvestorRelation">
      <Helmet>
        <title>Investor Relations | TrustEdge Capital</title>
        <meta name="description" content="Access the latest reports, financial statements, and press releases from TrustEdge Capital. Stay informed about our company's performance and strategic direction." />
        <meta property="og:title" content="Investor Relations | TrustEdge Capital" />
        <meta property="og:description" content="Access the latest reports, financial statements, and press releases from TrustEdge Capital." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.trustedgecapital.in/investor-relations" />
        <meta property="og:image" content="/public/favicon.ico" />
        <link rel="canonical" href="https://www.trustedgecapital.in/investor-relations" />
      </Helmet>
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
              {sortedCategories.map((category, idx) => (
                <div
                  key={category.name}
                  className={`category-item ${folderPath[0] === category.name ? 'selected' : ''}`}
                  onClick={() => handleCategoryClick(category.name)}
                  style={{
                    padding: '12px 16px',
                    marginBottom: 8,
                    borderRadius: 8,
                    cursor: 'pointer',
                    backgroundColor: folderPath[0] === category.name ? '#e6f4ff' : 'transparent',
                    border: folderPath[0] === category.name ? '1px solid #1677ff' : '1px solid transparent',
                    transition: 'all 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center' }}>
                    <FolderOpenOutlined style={{ marginRight: 8, color: folderPath[0] === category.name ? '#1677ff' : '#666' }} />
                    {category.name}
                  </span>
                  {/* Copy Link Button for parent tab */}
                  <Button
                    type="text"
                    icon={<CopyOutlined />}
                    size="small"
                    style={{ marginLeft: 8 }}
                    onClick={e => {
                      e.stopPropagation();
                      handleCopyLink([category.name]);
                    }}
                    title="Copy link to this category"
                  />
                </div>
              ))}
            </div>
          </Sider>
          <Layout>
            <Content className='InvestorRelationContent' style={{ padding: screens.xs ? 8 : 24 }}>
              {folderPath.length > 1 && (
                <div style={{ marginBottom: 16 }}>
                  <Button
                    icon={<ArrowLeftOutlined />}
                    onClick={handleBack}
                    style={{ marginBottom: 16 }}
                  >
                    Back
                  </Button>
                  <Title level={4} style={{ marginBottom: 16, fontSize: screens.xs ? 18 : 24 }}>
                    {folderPath[folderPath.length - 1]} Folders
                  </Title>
                </div>
              )}
              {folderPath.length === 1 && (
                <Title level={4} style={{ marginBottom: 16, fontSize: screens.xs ? 18 : 24 }}>
                  {folderPath[0]} Folders
                </Title>
              )}
              <Row gutter={[16, 16]}>
                {/* Show immediate children folders */}
                {sortedChildren.map((child, idx) => (
                  <Col xs={24} sm={12} md={8} lg={6} key={child.name + idx} style={{ position: 'relative' }}>
                    <Tooltip title={child.name} placement="top">
                      <Card
                        title={<span><FolderOpenOutlined style={{ color: '#FF6518' }} /> {child.name}</span>}
                        hoverable
                        className='folder-card'
                        styles={{ body: { padding: 8 } }}
                        onClick={() => handleFolderClick(child.name)}
                      >
                        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
                          {(() => {
                            const folderCount = getImmediateFolderCount(child);
                            const docCount = getDocumentCount(child);
                            return `${folderCount} folder${folderCount !== 1 ? 's' : ''}, ${docCount} document${docCount !== 1 ? 's' : ''}`;
                          })()}
                        </Typography.Text>
                        {/* Copy Link Button (top right corner) */}
                        <Button
                          type="text"
                          icon={<CopyOutlined />}
                          size="small"
                          style={{ position: 'absolute', top: 8, right: 8, zIndex: 2 }}
                          onClick={e => {
                            e.stopPropagation();
                            handleCopyLink([...folderPath, child.name]);
                          }}
                          title="Copy link to this folder"
                        />
                      </Card>
                    </Tooltip>
                  </Col>
                ))}
                {/* Show files in the current folder */}
                {sortedFiles.map((file, idx) => (
                  <Col xs={24} sm={12} md={8} lg={6} key={file.name + idx}>
                    <Tooltip title={file.name} placement="top">
                      <Card
                        title={<span><FilePdfOutlined style={{ color: '#cf1322' }} /> {file.name}</span>}
                        actions={[
                          <Button type="link" icon={<EyeOutlined />} href={file.path} target="_blank" rel="noopener noreferrer" title="Preview" />, 
                          <Button type="link" icon={<DownloadOutlined />} href={file.path} download title="Download" />
                        ]}
                        hoverable
                        className='pdf-card'
                        styles={{ body: { padding: screens.xs ? 8 : 16 } }}
                      >
                        {/* Removed PDF Document text */}
                      </Card>
                    </Tooltip>
                  </Col>
                ))}
                {sortedChildren.length === 0 && sortedFiles.length === 0 && (
                  <Col span={24}><Typography.Text type="secondary">No documents found in this folder.</Typography.Text></Col>
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
              id='MobileFilterButton'
              onClick={() => setFilterModalOpen(true)}
            />
          )}
          {/* Modal for Category Selection */}
          <Modal
            title="Select Category"
            open={filterModalOpen}
            footer={null}
            // onCancel={() => setFilterModalOpen(false)}
            // onOk={handleApplyFilter}
            okText="Apply"
            cancelText="Cancel"
            centered
            bodyStyle={{ padding: 0 }}
            className="ir-tree-modal"
          >
            <div className="modal-category-list">
              {sortedCategories.map((category, idx) => (
                <div
                  key={category.name}
                  className={`modal-category-item ${modalSelected === category.name ? 'selected' : ''}`}
                  onClick={() => {
                    setModalSelected(category.name);
                    setFolderPath([category.name]);
                    setFilterModalOpen(false);
                  }}
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
          {/* Deep Link Modal for folder */}
          <Modal
            open={deepLinkModalOpen}
            onCancel={handleDeepLinkModalClose}
            footer={null}
            centered
            width={900}
            className="ir-deeplink-modal"
            styles={{ body: { padding: 0 } }}
            maskClosable={false}
          >
            {/* Modal Title: Show folder path and back button */}
            <div className='ir-deeplink-modal-title'>
              {modalNavPath.length > deepLinkFolderPath.length && (
                <Button
                  icon={<ArrowLeftOutlined />}
                  onClick={handleModalBack}
                  style={{ marginRight: 12 }}
                  size="small"
                >
                  Back
                </Button>
              )}
              <Title level={4} style={{ margin: 0 }}>
                {modalNavPath.join(' / ')}
              </Title>
            </div>
            {/* Modal Content: Show folder's children and files, allow navigation */}
            {(() => {
              const modalNode = getNodeByPath(investorRelationData, modalNavPath);
              if (!modalNode) return <Typography.Text type="secondary">Folder not found.</Typography.Text>;
              const modalChildren = modalNode.children ? modalNode.children.slice().sort(folderSort) : [];
              const modalFiles = modalNode.files ? modalNode.files.slice().sort((a, b) => a.name.localeCompare(b.name)) : [];
              return (
                <Row gutter={[16, 16]} style={{marginTop: 16}}>
                  {modalChildren.map((child, idx) => (
                    <Col xs={24} sm={12} md={8} lg={6} key={child.name + idx} style={{ position: 'relative' }}>
                      <Tooltip title={child.name} placement="top">
                        <Card
                          title={<span><FolderOpenOutlined style={{ color: '#FF6518' }} /> {child.name}</span>}
                          hoverable
                          className='folder-card'
                          styles={{ body: { padding: 8 } }}
                          onClick={() => handleModalFolderClick(child.name)}
                        >
                          <Typography.Text type="secondary" style={{ fontSize: 12 }}>
                            {(() => {
                              const folderCount = getImmediateFolderCount(child);
                              const docCount = getDocumentCount(child);
                              return `${folderCount} folder${folderCount !== 1 ? 's' : ''}, ${docCount} document${docCount !== 1 ? 's' : ''}`;
                            })()}
                          </Typography.Text>
                        </Card>
                      </Tooltip>
                    </Col>
                  ))}
                  {modalFiles.map((file, idx) => (
                    <Col xs={24} sm={12} md={8} lg={6} key={file.name + idx}>
                      <Tooltip title={file.name} placement="top">
                        <Card
                          title={<span><FilePdfOutlined style={{ color: '#cf1322' }} /> {file.name}</span>}
                          actions={[
                            <Button type="link" icon={<EyeOutlined />} href={file.path} target="_blank" rel="noopener noreferrer" title="Preview" />, 
                            <Button type="link" icon={<DownloadOutlined />} href={file.path} download title="Download" />
                          ]}
                          hoverable
                          className='pdf-card'
                          styles={{ body: { padding: 0 } }}
                        >
                        </Card>
                      </Tooltip>
                    </Col>
                  ))}
                  {modalChildren.length === 0 && modalFiles.length === 0 && (
                    <Col span={24}><Typography.Text type="secondary">No documents found in this folder.</Typography.Text></Col>
                  )}
                </Row>
              );
            })()}
          </Modal>
        </Layout>
      </div>
    </section>
  )
}

export default InvestorRelation