import React from 'react';
import { FaWhatsapp, FaTwitter } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";

const Container = ({ icon, color }) => {
    return (
        <div className={`rounded-full ${color} w-10 h-10 flex items-center justify-center hover:opacity-75 transition-opacity duration-200 cursor-pointer`}>
            {icon}
        </div>
    );
}

const Slider2 = () => {
  return (
    <div className='text-white flex flex-col sm:flex-row gap-16'> {/* Adjusted for responsive layout */}
      <div className='text-white flex flex-col items-start justify-start py-3 mt-8 gap-2 w-1/2'>
        <div className='flex items-center gap-4'>
          <p className='text-blue-600'>
            Why Choose Us
          </p>
          <div className='bg-blue-600 w-20 h-0.5'></div>
        </div>
        <div className='flex text-xl sm:text-4xl font-bold gap-3'>
          <h1 className='mt-3'>
            Feel Free To Contact &
          </h1>
          <h1>
            <div className="bg-blue-600 py-3 px-3 rounded-[10px]">You !</div>
          </h1>
        </div>
        <p className='font-serif'>
          We’d love to hear from you! If you have any questions, comments, or feedback about our IPTV Subscription services, please don’t hesitate to get in touch with us using one of the methods below.
        </p>
        <div className='flex gap-3'>
          <Container
            icon={<FaWhatsapp className="text-white text-2xl" />} 
            color='bg-green-500'  // Corrected Whatsapp color.
          />
          <Container
            icon={<FaTwitter className="text-white text-2xl" />} 
            color='bg-blue-400'
          />
          <Container
            icon={<BiLogoTelegram className="text-white text-2xl" />} 
            color='bg-blue-600' //Corrected color.
          />
        </div>
        <div>
        <div className="mapouter mt-5">
          <div className="gmap_canvas">
            <iframe className="gmap_iframe" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=600&height=321&hl=en&q=rabat &t=&z=14&ie=UTF8&iwloc=B&output=embed"></iframe>
          </div>
          <style>
            {`.mapouter{position:relative;text-align:right;width:600px;height:321px;}.gmap_canvas {overflow:hidden;background:none!important;width:600px;height:321px;}.gmap_iframe {width:600px!important;height:321px!important;}`}
          </style>
        </div>
      </div>
      </div>
      <div className='bg-white p-10 w-1/2 flex flex-col gap-5 mt-10 rounded-[1%]'>
        <input 
        type='text'
        placeholder='Your Name..'
        className=' rounded-[8px] bg-blue-100 p-5 w-full text-black'
        />
        <input 
        type='email'
        placeholder='Your Email..'
        className=' rounded-[3px] bg-blue-100 p-5 w-full text-black'
        />
        <input 
        type='text'
        placeholder='Whatssapp Number'
        className=' rounded-[3px] bg-blue-100 p-5 w-full text-black'
        />
        <input 
        type='text'
        placeholder='Your Message..'
        className=' rounded-[3px] bg-blue-100 p-5 w-full h-full placeholder:text text-start text-black'
        />
        <button className='bg-blue-600 w-1/3 pt-3 pb-3 sm:pt-5 sm:pb-5 pr-4 pl-4 rounded-[8px] text-white   '>
        SUBMIT MESSAGE
        </button>
      </div>
    </div>
  );
}

export default Slider2;