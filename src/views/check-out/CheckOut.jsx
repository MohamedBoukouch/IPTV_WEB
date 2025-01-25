import React from 'react';
import back2 from '../../assets/back2.jpg';
import Navbar from '../../components/navBar/Navbar';
import Footer from '../../components/footer/Footer';
import Slider1 from '../../components/check-out/Slider1';
import Slider2 from '../../components/check-out/Slider2';
import { useLocation } from 'react-router-dom';

const CheckOut = () => {

  const location = useLocation(); // Retrieve state passed from navigate
  const { orders } = location.state || {};

  return (
    <div className="bg-black text-white">
      {/* Header Section with Background */}
      <div
        className="bg-cover bg-center relative"
        style={{ backgroundImage: `url(${back2})` }}
      >
        <div className="absolute inset-0 bg-black opacity-90 z-10"><Navbar /></div> 
        
        <div className='flex justify-center items-center p-44'>
          <div className="rounded-[10px] text-white p-3 text-center font-bold text-7xl font-titel w-fit relative z-20">
            Checkout
          </div>
        </div>
      </div>

      
      {/* Sliders Section */}
      <div className="w-full flex  gap-5 pt-10 pb-40 pl-16 pr-16 ">
        <div className="w-full">
          <Slider1 />
        </div>
        <div className="w-full">
          <Slider2 />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CheckOut;
