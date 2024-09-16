import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './layout/header-footer/Navbar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './layout/header-footer/Footer';
import HomePage from './layout/homepage/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './layout/about/About';
function App() {
  const [keyword, setKeyword] = useState('');

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar keyWord={keyword} setKeyword={setKeyword} />
        <Routes>
          <Route path='/' element={<HomePage keyWord={keyword} />} />
          <Route path='/:categoryId'  element={<HomePage keyWord={keyword} />}  />
          <Route path='/about' element={<About />} /> 
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>

  )
}

export default App;
