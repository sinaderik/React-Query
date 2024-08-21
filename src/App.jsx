import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'

import Courses from './pages/Courses'
import { QueryClientProvider, QueryClient } from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import SingleCourse from './pages/SingleCourse'

const App = () => {
  const client = new QueryClient();
  return (
    <>
      <QueryClientProvider client={client}>
        <Navbar />ّ
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/courses/:id' element={<SingleCourse />} />
        </Routes>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  )
}

export default App