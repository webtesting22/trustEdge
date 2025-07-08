import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeComponents from './Components/HomePageComponents/HomeComponents'
import NavigationCode from './Components/Nav/NavigationCode'
import Footer from './Components/Footer/Footer'
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import Action from './Components/Action/Action'
import About from './Components/AboutUs/About'
const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
    <>
      <BrowserRouter>
        <NavigationCode onShowModal={showModal} />
        <Routes>
          <Route path='/' element={<HomeComponents />} />
          <Route path='/about' element={<About />} />  
        </Routes>
        <Footer />
        <Action />
      </BrowserRouter>
      <Modal
        open={modalOpen}
        onCancel={handleModalClose}
        footer={null}
        centered
        closeIcon
        bodyStyle={{ textAlign: 'center', padding: '40px 24px' }}
      >
        <ExclamationCircleOutlined style={{ fontSize: 48, color: '#FF6518', marginBottom: 16 }} />
        <h2 style={{ margin: '16px 0 8px 0', fontWeight: 600 }}>Under Working</h2>
        <div style={{ color: '#888', fontSize: 18 }}>This section is currently under development.<br />Please check back soon!</div>
      </Modal>
    </>
  )
}

export default App
