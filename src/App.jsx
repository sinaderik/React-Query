import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Courses from './pages/Courses'
import Home from './pages/Home'

const App = () => {
  return (
    <>
    <Navbar />ّ
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/courses' element={<Courses />}/>
    </Routes>
    </>
  )
}

export default App