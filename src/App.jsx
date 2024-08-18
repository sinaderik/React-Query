import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Courses from './pages/Courses'
import Home from './pages/Home'
import { QueryClientProvider, QueryClient } from 'react-query'

const App = () => {
  const client = new QueryClient
  return (
    <>
      <QueryClientProvider client={client}>
        <Navbar />ّ
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
        </Routes>
      </QueryClientProvider>
    </>
  )
}

export default App