import React from 'react';
import Home from './views/home/HomeView';
import ContactUs from './views/contact_us/ContactUs';
import Prices from './views/prices/Prices';
import Tutrial from './views/tutrial/Tutrial';
import Faq from './views/faq/Faq';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/tutrial" element={<Tutrial />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </Router>
  );
}

export default App;






{/*function App() {
  return (
    <div 
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${back1})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-100" />
      <Navbar />
      <Body />
      <Footer/>
    </div>
  );
}

export default App;*/}
