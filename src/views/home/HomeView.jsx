import React from 'react';
import Navbar from '../../components/navBar/Navbar';
import Body from './Body';
import back1 from '../../assets/back1.jpg';
import Footer from '../../components/footer/Footer';

const HomeView = () => {
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

export default HomeView
