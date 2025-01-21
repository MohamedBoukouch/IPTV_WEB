import React from 'react';
import { GrFormNextLink } from "react-icons/gr";
import BrandInfo from '../../components/home/BrandInfo';
import PackageOffer from '../../components/home/PackageOffer';
import services from '../../assets/services.webp';
import Service from '../../components/home/Service';
import { HiArrowUpCircle } from "react-icons/hi2";
import WhyChoseUs from '../../components/home/WhyChoseUs';
import HowItWork from '../../components/home/HowItWork';
import FeedBack from '../../components/home/FeedBack';


const Body = () => {
  return (
    <div className="relative h-screen font-titel py-28 ">
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white gap-8">
        <div className="text-center max-w-2xl">
          <h1 className="text-7xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-[20px]">
            The Best IPTV 
            <div className='flex gap-5'>
              <div>Subscription</div>
              <div className="block text-blue-600">Service</div>
            </div>
            Provider
          </h1>
        </div>

        <div className="flex items-center gap-5 text-3xl sm:text-xl md:text-2xl">
          {/* Left Line */}
          <div className="w-24 h-[2px] bg-blue-500"></div>
          
          <div>Welcome to StreamTVUniverse</div>
          
          {/* Right Line */}
          <div className="w-24 h-[2px] bg-blue-500"></div>
        </div>

        <div className="text-center max-w-2xl text-lg sm:text-base">
          <p className="text-lg leading-relaxed sm:text-sm">
            At StreamTVUniverse, We offer the best IPTV subscription service, providing access to 
            over 22,000 TV channels and 150,000 VODs in 4K, FHD, and HD. Our service is accessible
            from any device and any location, all at great prices!
          </p>
        </div>

        <div className="group sm:block relative">
          <button className="bg-blue-500 text-white border-black px-10 py-5 rounded-[10px]
            hover:bg-blue-600 transition-all duration-300 flex items-center transform hover:scale-10">
            SUBSCRIBE NOW
            <GrFormNextLink className=" ml-3 text-2xl" />
          </button>
        </div>
      </div>

      {/* Black Background After Image */}
      <div className=" bg-black py-8 ">
        <BrandInfo/>
        <div className='text-white flex flex-col items-center justify-center py-3 mt-8 gap-6'>
          <div className='flex text-4xl font-bold gap-3'>
            <h1 className='mt-3'>
              Choose the Plan That Suits For 
            </h1>
            <h1>
              <div className="bloc bg-blue-600 py-3 px-3 rounded-[10px]">You !</div>
            </h1>
          </div>
          <p className='font-serif'>
            Select Your Premium IPTV Subscription Plan and Unlock a Universe of Entertainment.
          </p>
        </div>
        {/* Les offers packages*/}
        <div className='flex items-center justify-center mr-16 ml-16 mt-10'>
          <PackageOffer nbr_month={1} plan={"Basic Plan"} prix={12.99} isVip={0}/>
          <PackageOffer nbr_month={3} plan={"Basic Plan"} prix={39.99} isVip={0}/>
          <PackageOffer nbr_month={6} plan={"Basic Plan"} prix={49.99} isVip={0}/>
          <PackageOffer nbr_month={12} plan={"Basic Plan"} prix={69.99} isVip={1}/>
        </div>
        {/*Need Custom */}
        <div className='flex items-center justify-center  gap-8'>
          <div className='flex text-6xl font-bold gap-3 text-white'>
            <h1 className='mt-3'>
              Need Custom
            </h1>
            <h1>
              <div className="bloc bg-blue-600 py-3 px-3 rounded-[10px]">Service?</div>
            </h1>
          </div>
          <div className='flex flex-col gap-3 w-1/3 font-titel'>
              <input 
              type='email'
              placeholder='Your email address...'
              className='pt-5 pb-5 pr-4 pl-4 rounded-[8px]'
              />
              <button className='bg-blue-800 pt-4 pb-4 pr-4 pl-4 rounded-[8px] text-white text-2xl'>
                send
              </button>
          </div>
        </div>
        {/*Services*/}
        <div className='flex flex-col items-center justify-center mt-40 gap-8'>
          <div className='  text-white text-6xl font-bold flex flex-col items-center justify-center'>
            <div className='flex  gap-3 '>
                <h1 className='mt-3'>
                  Need Custom
                </h1>
                <h1>
                  <div className="bloc bg-blue-600 py-3 px-3 rounded-[10px]">Service?</div>
                </h1>
                <h1 className='mt-3'>
                  Subscription
                </h1>
            </div>
            <div>
              Service Available
            </div>  
          </div>
          <div className='flex items-center justify-center gap-4'>
            <div className='bg-white w-10 h-0.5'></div>
            <div className='text-white'>OUR SERVICES</div>
            <div className='bg-white w-10 h-0.5'></div>
          </div>

          <div className='flex flex-col items-center justify-center'>
            <div className='flex items-center justify-center mt-10 pl-10 pr-10'>
              <div className='flex flex-col items-center justify-center gap-20'>
                <Service/>
                <Service/>
              </div>
              <div>
                <img alt='Services' src={services} />
              </div>
              <div className='flex flex-col items-center justify-center gap-20'>
                <Service/>
                <Service/>
              </div>
            </div>
            <div className='relative group hidden sm:block mt-5'>
              <button className='bg-blue-600 rounded-[40px] p-6 text-white flex items-center justify-between'>
                Activate Your IPTV Plane
                <HiArrowUpCircle
                  className='text-white text-3xl ml-3 '
                />
              </button>
            </div>
          </div>
        </div>

        {/*Why Chose Us*/}
        <WhyChoseUs/>

        {/*How it work*/}
        <HowItWork/>

        {/*FeerBack*/}
        {<FeedBack/>}
      </div>

    </div>
  );
};

export default Body;
