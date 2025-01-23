import React from 'react';
import back2 from '../../assets/back2.jpg';
import Navbar from '../../components/navBar/Navbar';
import Footer from '../../components/footer/Footer';
import Slider1 from '../../components/contact-us/Slider1';
import Slider2 from '../../components/contact-us/Slider2';

const ContactUs = () => {
  return (
    <div className="">
      <div
        className="bg-cover bg-center relative"
        style={{ backgroundImage: `url(${back2})` }}
      >
        <div className="absolute inset-0 bg-black opacity-90 z-10"><Navbar /></div> 
        
        <div className='flex justify-center items-center p-44'>
          <div className="bg-blue-600 rounded-[10px] text-white p-3 text-center font-bold text-5xl font-titel w-fit relative z-20">
            Contact US
          </div>
        </div>
      </div>
      <div className='bg-black text-white pr-20 pl-20 flex flex-col gap-5 pt-12'>
        
        <Slider1 />
        <Slider2 />
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;