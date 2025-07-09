import React from 'react'
import './App.css'
import Navbar from './Navbar'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import CreateUser from './pages/CreateUser'
import Footer from './Footer'

function App() {
  return (
    <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateUser />} />
        </Routes>
        
        <Footer/>

    </BrowserRouter>
  );
}

export default App
