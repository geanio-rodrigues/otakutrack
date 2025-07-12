import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Login from './pages/Login';
import CreateUser from './pages/CreateUser';
import New from './pages/New';
import Popular from './pages/Popular'
import Category from './pages/Category';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<><New /><Popular /></>} />
        <Route path="/:category" element={<Category />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateUser />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;