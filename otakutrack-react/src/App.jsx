import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import New from './pages/New';
import Popular from './pages/Popular'
import Category from './pages/Category';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <main className='content'>
          <Routes>
              <Route path="/" element={<><New /><Popular /></>} />
              <Route path="/:category" element={<Category />} />
              <Route path="/login" element={<Login />} />
              <Route path="/create-account" element={<CreateAccount />} />
          </Routes>
        </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;