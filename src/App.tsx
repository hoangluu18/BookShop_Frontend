import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './layout/header-footer/Navbar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './layout/header-footer/Footer';
import HomePage from './layout/homepage/HomePage';
function App() {
    const [keyword, setKeyword] = useState('');

    return(
      <div className='App'>
        <Navbar keyWord={keyword} setKeyword={setKeyword} />
        <HomePage keyWord={keyword} />
        <Footer />
      </div>

    )
}

export default App;
