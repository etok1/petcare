import React from "react";
import Header from './components/Header/Header';
import Home from './components/Home';
import Pets from './components/Pets'
 import Help from './components/Help'
import Faq from './components/Faq'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <div className="App bg-desktop">
      <div className="containerApp">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/help" element={<Help />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App