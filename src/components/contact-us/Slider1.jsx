import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


const container=({icon1,icon2,titel1,titel2})=>{
    return (
        <div className='rounded-[02%] border-[3px] border-white p-16 flex flex-col justify-center items-center gap-3'>
      <div className="rounded-full bg-blue-600 w-20 h-20 flex items-center justify-center hover:bg-blue-700 transition-colors duration-200">
        {icon1}
    </div>
      <div className='text-white'>
      {titel1}
      </div>
      <div className='flex gap-3'>
        <div>
        {icon2}
        </div>
        <div className='text-white'>
        {titel2}
        </div>
      </div>
    </div>
    );
}
const Slider1 = () => {
  return (
    <div className='flex justify-between items-center'>
        {container({
            icon1:<FaWhatsapp className="text-white text-4xl" />,
            icon2:<FaWhatsapp className='text-blue-600 mt-1' />,
            titel1:"Whatsapp :",
            titel2:"Whatsapp : +1 (206) 237-2690"
        })}
        {container({
            icon1:<MdEmail className="text-white text-4xl" />,
            icon2:<MdEmail className='text-blue-600 mt-1' />,
            titel1:"Email Address :",
            titel2:"support@streamtvuniverse.com"
        })}
        {container({
            icon1:<FaLocationDot className="text-white text-4xl" />,
            icon2:<FaLocationDot className='text-blue-600 mt-1' />,
            titel1:"support@streamtvuniverse.com",
            titel2:"18th Street, Los Angel"
        })}
    </div>
  );
}

export default Slider1
