import React, { useState, useEffect } from 'react';
import back2 from '../../assets/back2.jpg';
import feedback1 from '../../assets/feedbacks/feedback1.webp';
import feedback2 from '../../assets/feedbacks/feedback2.webp';
import feedback3 from '../../assets/feedbacks/feedback3.webp';
import feedback4 from '../../assets/feedbacks/feedback4.webp';
import feedback5 from '../../assets/feedbacks/feedback5.webp';
import feedback6 from '../../assets/feedbacks/feedback6.webp';

const FeedBack = ({with_back}) => {
  const images = [feedback1, feedback2, feedback3, feedback4, feedback5, feedback6];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle moving to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className=' mt-20 ms:mt-10 pr-4 pb-10'>
      <div 
        className='relative bg-cover bg-center h-screen*2' 
        style={{
          backgroundImage: with_back ? `url(${back2})` : undefined,
          backgroundColor: with_back ? undefined : 'black',
        }}      >
        <div className="absolute inset-0 bg-black opacity-90"></div>
        
        <div className='relative z-10'>
          <div className='flex flex-col sm:flex-row items-center justify-center text-white text-5xl font-bold gap-3 pt-32'>
            <h1>What they say</h1>
            <h1 className='bg-blue-600 p-3 rounded-[15px]'>about us</h1>
          </div>

          <div className='flex items-center justify-center gap-3 mt-10'>
            <div className='bg-white w-16 h-0.5'></div>
            <div className='text-xl text-white'>Customer Feedback</div>
            <div className='bg-white w-16 h-0.5'></div>
          </div>

          <div className='sm:pr-20 sm:pl-20'>
            <div className="relative overflow-hidden mt-10">
              <div 
                className="flex transition-transform duration-500 gap-3" 
                style={{ transform: `translateX(-${currentIndex * (100 / images.length)}%)` }}
              >
                {images.map((img, index) => (
                  <div key={index} className=" w-[50%] sm:w-[20%] flex-shrink-0 flex justify-center items-center">
                    <img src={img} alt={`Slide ${index}`} className="w-100 h-150" style={{ borderRadius: '6px sm:20px' }}/>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='flex flex-col items-center justify-center  gap-4 sm:gap-8 text-xl pb-10'>
            <div className='relative group mt-6'>
              <button className='bg-blue-600 rounded-[40px] p-3 text-white flex items-center justify-between '>
                Last Chance: Get 70% OFF
              </button>
            </div>
            <div>
              <h1 className='text-white font italic text-[17px] '>
              ONE TIME PAYMENT - Endless Entertainment!
              </h1>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default FeedBack;
