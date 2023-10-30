import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Auth from './pages/Auth'
import HomePage from './pages/HomePage'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/register' element={<Auth />} />
      </Routes>

    </>
  )
}

export default App
