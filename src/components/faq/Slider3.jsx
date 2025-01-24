import React from 'react';
import mag from '../../assets/mag_box.png';
import { FaWhatsapp } from "react-icons/fa";


const Slider3 = () => {
  return (
    <div className='bg-blue-600 rounded-xl p-12 flex gap-16 justify-between items-center'>
      <div className=''>
        <img alt='image' src={mag} className='w-40'/>
      </div>
      <div className='flex flex-col text-white w-1/2 items-start justify-start text-start gap-3'>
        <div className='text-2xl font-bold '>
            Our Premium IPTV Subscription Service Starts With $12.99 per month: Enjoy your Favorite Channels
        </div>
        <div className=''>
        We offer a wide range of channels from all around the world, including premium channels and sports packages.
        </div>
      </div>
      <div className='flex flex-col gap-4 text-white text-center '>
        <div className='p-4 bg-blue-800 rounded-xl  hover:bg-white hover:text-blue-600 cursor-pointer'>
        SEE PlanS & Prices
        </div>
        <div className='flex gap-3 justify-center items-center'>
            <FaWhatsapp
            className='text-blue-600 bg-white w-16 h-16 p-4 rounded-xl text-xl'
            />
            <div className='flex flex-col text-[16px] font-bold'>
                <h1>NEED MORE HELP?</h1>
                <p>+1 (206) 237-2690</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Slider3
