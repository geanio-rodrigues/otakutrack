import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import CreateUser from './pages/CreateUser';
import Footer from './Footer';
import New from './New';
import Popular from './Popular'
import Category from './Category';

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