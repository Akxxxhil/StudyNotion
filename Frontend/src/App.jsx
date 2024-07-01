import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './Components/core/auth/Signup'
import Login from './Components/core/auth/Login'

function App() {
  return (
    <div className='w-screen min-h-screen bg-[#000814] flex flex-col font-inter'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
