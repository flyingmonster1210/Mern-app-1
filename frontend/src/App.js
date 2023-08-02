import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import DashBoard from './pages/DashBoard'
import React from 'react'
import Header from './components/Header'


function App () {
  return (
    <Router>
      <div className='container'>
        <Header />
        <Routes>
          <Route path='/' element={<DashBoard />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
