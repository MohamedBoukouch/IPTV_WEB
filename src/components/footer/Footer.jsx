import React from 'react';
import back3 from '../../assets/back3.webp';
import logo from '../../assets/logo.png';
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GoChevronRight } from "react-icons/go";



const Footer = () => {
  return (
    <div className='mb-6'>
        <div 
            className='relative bg-cover bg-center w-full' 
            style={{ backgroundImage: `url(${back3})` }}
        >
            <div className="absolute inset-0 bg-black opacity-90"></div>

            <div className='relative z-10 flex flex-col  pt-10 pr-40 pl-40 gap-5'>
              <div className='w-full h-0.5 bg-white'></div>
              <div className='flex  justify-between'>
                <div className='flex flex-col items-start  justify-between'>
                  <div className=''>
                    <img alt="logo" src={logo} className='w-64'/>
                  </div>
                  <div className='text-white text-xl pt-3'>
                  You can contact us :
                  </div>
                  <div className='flex gap-5'>
                    <div>
                      <FaWhatsapp
                      className='text-blue-600 text-2xl mt-1'
                      />
                    </div>
                    <div className='text-white text-xl'>
                      +212 682950546
                    </div>
                  </div>
                  <div className='flex gap-5'>
                    <div>
                      <MdEmail 
                      className='text-blue-600 text-2xl mt-1'
                      />
                    </div>
                    <div className='text-white text-xl'>
                      boukouchmohamed@gmail.com
                    </div>
                  </div>
                </div>
                <div className='flex flex-col items-start justify-start gap-5'>
                  <div className='flex gap-3'>
                    <div className='text-white text-xl '>SUPPORT</div>
                    <div className='bg-blue-600 w-12 h-0.5 mt-4'></div>
                  </div>
                  <div className='flex gap-5'>
                    <div>
                      <GoChevronRight
                      className='text-blue-600 text-xl mt-1'
                      />
                    </div>
                    <div className='text-white text-xl'>Contact</div>
                  </div>
                  <div className='flex gap-5'>
                    <div>
                      <GoChevronRight
                      className='text-blue-600 text-xl mt-1'
                      />
                    </div>
                    <div className='text-white text-xl'>FAQ</div>
                  </div>
                  <div className='flex gap-5'>
                    <div>
                      <GoChevronRight
                      className='text-blue-600 text-xl mt-1'
                      />
                    </div>
                    <div className='text-white text-xl'>About Us</div>
                  </div>
                  <div className='flex gap-5'>
                    <div>
                      <GoChevronRight
                      className='text-blue-600 text-xl mt-1'
                      />
                    </div>
                    <div className='text-white text-xl'>BLOG</div>
                  </div>
                </div>
                <div className='flex flex-col items-start justify-start gap-5'>
                  <div className='flex gap-3'>
                    <div className='text-white text-xl '>Useful Links</div>
                    <div className='bg-blue-600 w-12 h-0.5 mt-4'></div>
                  </div>
                  <div className='flex gap-5'>
                    <div>
                      <GoChevronRight
                      className='text-blue-600 text-xl mt-1'
                      />
                    </div>
                    <div className='text-white text-xl'>Plans&prices</div>
                  </div>
                  <div className='flex gap-5'>
                    <div>
                      <GoChevronRight
                      className='text-blue-600 text-xl mt-1'
                      />
                    </div>
                    <div className='text-white text-xl'>privacy Policy</div>
                  </div>
                  <div className='flex gap-5'>
                    <div>
                      <GoChevronRight
                      className='text-blue-600 text-xl mt-1'
                      />
                    </div>
                    <div className='text-white text-xl'>Term Of Service</div>
                  </div>
                  <div className='flex gap-5'>
                    <div>
                      <GoChevronRight
                      className='text-blue-600 text-xl mt-1'
                      />
                    </div>
                    <div className='text-white text-xl'>Refund Policy</div>
                  </div>
                </div>
                <div className='flex flex-col items-start justify-start gap-5'>
                    <div className='flex gap-3'>
                      <div className='text-white text-xl '>Newsletter Sign Up</div>
                      <div className='bg-blue-600 w-12 h-0.5 mt-4'></div>
                    </div>
                    <div className='text-white text-xl'>
                    Sign Up To Get Exclusive Offers !
                    </div>
                    <div className='flex flex-col gap-3 w-full font-titel'>
                      <input 
                      type='email'
                      placeholder='Your email address...'
                      className='pt-5 pb-5 pr-4 pl-4 rounded-[8px]'
                      />
                      <button className='bg-blue-800 pt-4 pb-4 pr-4 pl-4 rounded-[8px] text-white text-xl'>
                        SUBSCRIBE NOW
                      </button>
                  </div>
                </div>
              </div>
              <div className='w-full h-0.5 bg-white '></div>
              <div className=' flex items-center justify-center mt-6 mb-10 text-xl gap-2'>
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
