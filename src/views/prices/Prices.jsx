import React from 'react';
import back4 from '../../assets/back4.jpg';
import Navbar from '../../components/navBar/Navbar';
import Footer from '../../components/footer/Footer';
import { FaTv } from "react-icons/fa";
import PackageOffer from '../../components/home/PackageOffer';
import HowItWork from '../../components/home/HowItWork';
import FeedBack from '../../components/home/FeedBack';

const containe=({is_white,number})=>{
  return (
    <div className={`${is_white?'bg-white':"bg-blue-600"} w-full flex gap-2 rounded-[10px] p-3 ${is_white?'text-blue-600':"text-white"} items-center justify-center`}>
      <FaTv
      className='text-xl'
      />
      <div>{number}{number===1?" CONNECTION":" CONNECTIONS"}</div>
    </div>
  );
}
const Prices = () => {
  return (
    <div className="">
      <div
        className="bg-cover bg-center relative"
        style={{ backgroundImage: `url(${back4})` }}
      >
        <div className="absolute inset-0 bg-black opacity-70 z-10"><Navbar /></div> 
        
        <div className='flex flex-col justify-center items-center p-44 relative z-20 gap-5'>
          <div className="rounded-[10px] text-white p-3 text-center font-bold text-7xl font-titel w-fit relative z-20">
          Plans & Prices
          </div>
          <div className='flex items-center gap-4'>
          <div className='bg-blue-600 w-20 h-0.5'></div>
          <p className='text-white'>
            StreamTVUniverse
          </p>
          <div className='bg-blue-600 w-20 h-0.5'></div>
        </div>
        <div className="bg-white rounded-[5px] text-blue-600 pr-20 pl-20 pt-2 pb-2 text-center text-1xl font-titel w-fit relative z-20">
          Plans & Prices
        </div>
        </div>
      </div>
      <div className='bg-black text-white pr-20 pl-20 flex flex-col gap-5 pt-12 pb-20'>
        <div className='flex flex-col gap-2'>
          <div className='ml-5 sm:ml-36 flex items-start justify-start gap-3 mt-10 text-blue-600'>
            <div className='text-xl'>Plans</div>
            <div className='bg-blue-600 w-20 h-0.5 mt-4'></div>
          </div>
          <div className='flex flex-col sm:flex-row items-center justify-center text-white text-3xl font-bold gap-3 '>
            <h1>Choose the Plan That Suits For</h1>
            <h1 className='bg-blue-600 p-3 rounded-[15px]'>You!</h1>
          </div>
          <div className='text-center'>
            Access our Premium IPTV service with multiple devices and simultaneous connections for seamless viewing. Sign up now!
          </div>
        </div>
        <div className='flex gap-2'>
          {containe({
            is_white:true,
            number:1
          })}
          {containe({
            is_white:false,
            number:2
          })}
          {containe({
            is_white:false,
            number:3
          })}
          {containe({
            is_white:false,
            number:4
          })}
        </div>
        <div className='flex flex-col sm:flex-row items-center justify-center  mt-5 mb-9 gap-3'>
          <PackageOffer nbr_month={1} plan={"Basic Plan"} prix={12.99} isVip={0}/>
          <PackageOffer nbr_month={3} plan={"Basic Plan"} prix={39.99} isVip={0}/>
          <PackageOffer nbr_month={6} plan={"Basic Plan"} prix={49.99} isVip={0}/>
          <PackageOffer nbr_month={12} plan={"Basic Plan"} prix={69.99} isVip={1}/>
        </div>
          {<HowItWork/>}
          <FeedBack with_back={false} />
      </div>
      <Footer />
    </div>
  );
}

export default Prices
