import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeComponents from './Components/HomePageComponents/HomeComponents'
import NavigationCode from './Components/Nav/NavigationCode'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <NavigationCode/>
        <Routes>
          <Route path='/' element={<HomeComponents />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
