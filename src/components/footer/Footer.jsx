import React from 'react';
import back3 from '../../assets/back3.webp';
import logo from '../../assets/logo.png';
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GoChevronRight } from "react-icons/go";



const Footer = () => {
  return (
    <div className=''>
        <div 
            className='relative bg-cover bg-center w-full' 
            style={{ backgroundImage: `url(${back3})` }}
        >
            <div className="absolute inset-0 bg-black opacity-90"></div>

            <div className='relative z-10 flex flex-col  pt-5 pr-5 pl-5 sm:pr-20 sm:pl-20 gap-5 mr text-[12px] sm:text-xl'>
              <div className='w-full h-0.5 bg-white'></div>
              <div className='flex  flex-col sm:flex-row justify-between '>
                <div className='flex flex-col items-center sm:items-start  justify-between '>
                  <div className=''>
                    <img alt="logo" src={logo} className='w-64'/>
                  </div>
                  <div className='text-white pt-3'>
                  You can contact us :
                  </div>
                  <div className='flex gap-2 sm:gap-5'>
                    <div>
                      <FaWhatsapp
                      className='text-blue-600 mt-1'
                      />
                    </div>
                    <div className='text-white'>
                      +212 682950546
                    </div>
                  </div>
                  <div className='flex gap-5'>
                    <div>
                      <MdEmail 
                      className='text-blue-600  mt-1'
                      />
                    </div>
                    <div className='text-white '>
                      boukouchmohamed@gmail.com
                    </div>
                  </div>
                </div>
                <div className='flex flex-col items-center sm:items-start sm:justify-start  mt-3 gap-5'>
                  <div className='flex gap-3'>
                    <div className='text-white font-bold '>SUPPORT</div>
                    <div className='bg-blue-600 w-12 h-0.5 mt-2 sm:mt-4'></div>
                  </div>
                  <div className='flex gap-5'>
                    <div>
                      <GoChevronRight
                      className='text-blue-600 text-xl mt-1'
                      />
                    </div>
                    <div className='text-white '>Contact</div>
                  </div>
                  <div className='flex gap-5'>
                    <div>
                      <GoChevronRight
                      className='text-blue-600 text-xl mt-1'
                      />
                    </div>
                    <div className='text-white '>FAQ</div>
                  </div>
                  <div className='flex gap-5'>
                    <div>
                      <GoChevronRight
                      className='text-blue-600 text-xl mt-1'
                      />
                    </div>
                    <div className='text-white'>About Us</div>
                  </div>
                  <div className='flex gap-5'>
                    <div>
                      <GoChevronRight
                      className='text-blue-600 text-xl mt-1'
                      />
                    </div>
                    <div className='text-white '>BLOG</div>
                  </div>
                </div>
                <div className='flex flex-col items-center sm:items-start sm:justify-start gap-5 mt-3'>
                  <div className='flex gap-3'>
                    <div className='text-white  font-bold'>Useful Links</div>
                    <div className='bg-blue-600 w-12 h-0.5 mt-2 sm:mt-4'></div>
                  </div>
                  <div className='flex gap-5'>
                    <div>
                      <GoChevronRight
                      className='text-blue-600 text-xl mt-1'
                      />
                    </div>
                    <div className='text-white'>Plans&prices</div>
                  </div>
                  <div className='flex gap-5'>
                    <div>
                      <GoChevronRight
                      className='text-blue-600 text-xl mt-1'
                      />
                    </div>
                    <div className='text-white '>privacy Policy</div>
                  </div>
                  <div className='flex gap-5'>
                    <div>
                      <GoChevronRight
                      className='text-blue-600 text-xl mt-1'
                      />
                    </div>
                    <div className='text-white '>Term Of Service</div>
                  </div>
                  <div className='flex gap-5'>
                    <div>
                      <GoChevronRight
                      className='text-blue-600 text-xl mt-1'
                      />
                    </div>
                    <div className='text-white '>Refund Policy</div>
                  </div>
                </div>
                <div className='flex flex-col items-center sm:items-start sm:justify-start gap-5 mt-3'>
                    <div className='flex gap-3'>
                      <div className='text-white  font-bold'>Newsletter Sign Up</div>
                      <div className='bg-blue-600 w-12 h-0.5 mt-2 sm:mt-4'></div>
                    </div>
                    <div className='text-white '>
                    Sign Up To Get Exclusive Offers !
                    </div>
                    <div className='flex flex-col gap-3 w-full '>
                      <input 
                      type='email'
                      placeholder='Your email address...'
                      className='pt-3 pb-3 sm:pt-5 sm:pb-5 pr-4 pl-4 rounded-[8px]'
                      />
                      <button className='bg-blue-800 pt-3 pb-3 sm:pt-5 sm:pb-5 pr-4 pl-4 rounded-[8px] text-white '>
                        SUBSCRIBE NOW
                      </button>
                  </div>
                </div>
              </div>
              <div className='w-full h-0.5 bg-white '></div>
              <div className=' flex items-center justify-center mt-6 mb-10 sm:text-xl gap-2'>
                <div className='text-white'>
                  Copyright © 2024 IPTV, All rights reserved. Powered by
                </div>
                <div>
                  <a className='text-blue-600 '>
                  StreamTVUniverse
                  </a>
                </div>
              </div>
            </div>

        </div>
    </div>
  )
}

export default Footer
