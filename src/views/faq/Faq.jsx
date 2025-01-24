import React from 'react';
import back2 from '../../assets/back2.jpg';
import Navbar from '../../components/navBar/Navbar';
import Footer from '../../components/footer/Footer';
import Slider1 from '../../components/faq/Slider1';
import Slider2 from '../../components/faq/Slider2';
import Slider3 from '../../components/faq/Slider3';

const Faq = () => {
    return (
        <div className="">
          <div
            className="bg-cover bg-center relative"
            style={{ backgroundImage: `url(${back2})` }}
          >
            <div className="absolute inset-0 bg-black opacity-90 z-10"><Navbar /></div> 
            
            <div className='flex justify-center items-center p-44'>
              <div className="rounded-[10px] text-white p-3 text-center font-bold text-7xl font-titel w-fit relative z-20">
                FAQ
              </div>
            </div>
          </div>
            <div className='bg-black text-white pr-20 pl-20 flex flex-col gap-4 pb-7 '>
            <div className='flex gap-16 pt-12'>
            <Slider1/>
            <Slider2/>
            </div>
            <div className='text-gray-500 text-xl pl-5'>
              We offer a 7 Days Money Back Guarantee for Any Reason
            </div>
            <div className='pl-10 pr-6'>
              <Slider3/>
            </div>            
          </div>
          <Footer />
        </div>
      );
}

export default Faq
