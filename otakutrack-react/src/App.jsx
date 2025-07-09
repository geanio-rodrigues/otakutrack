import React from 'react'
import './App.css'
import Navbar from './Navbar'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import CreateUser from './pages/CreateUser'

function App() {
  return (
    <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateUser />} />
        </Routes>
        
        <h4>Footer</h4>

    </BrowserRouter>
  );
}

export default App
