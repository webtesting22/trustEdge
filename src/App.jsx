import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeComponents from './Components/HomePageComponents/HomeComponents'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeComponents />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
