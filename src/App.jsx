import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeComponents from './Components/HomePageComponents/HomeComponents'
import NavigationCode from './Components/Nav/NavigationCode'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <NavigationCode/>
        <Routes>
          <Route path='/' element={<HomeComponents />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
