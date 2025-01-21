import React, { useState, useEffect } from 'react';
import back2 from '../../assets/back2.jpg';
import feedback1 from '../../assets/feedbacks/feedback1.webp';
import feedback2 from '../../assets/feedbacks/feedback2.webp';
import feedback3 from '../../assets/feedbacks/feedback3.webp';
import feedback4 from '../../assets/feedbacks/feedback4.webp';
import feedback5 from '../../assets/feedbacks/feedback5.webp';
import feedback6 from '../../assets/feedbacks/feedback6.webp';

const FeedBack = () => {
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
    <div className='mt-40 pr-4'>
      <div 
        className='relative bg-cover bg-center h-screen' 
        style={{ backgroundImage: `url(${back2})` }}
      >
        <div className="absolute inset-0 bg-black opacity-90"></div>
        
        <div className='relative z-10'>
          <div className='flex items-center justify-center text-white text-5xl font-bold gap-3 pt-32'>
            <h1>What they say</h1>
            <h1 className='bg-blue-600 p-3 rounded-[15px]'>about us</h1>
          </div>

          <div className='flex items-center justify-center gap-3 mt-10'>
            <div className='bg-white w-16 h-0.5'></div>
            <div className='text-xl text-white'>Customer Feedback</div>
            <div className='bg-white w-16 h-0.5'></div>
          </div>

          <div className='pr-20 pl-20'>
            <div className="relative overflow-hidden mt-10">
              <div 
                className="flex transition-transform duration-500 gap-5" 
                style={{ transform: `translateX(-${currentIndex * (100 / images.length)}%)` }}
              >
                {images.map((img, index) => (
                  <div key={index} className="w-[20%] flex-shrink-0 flex justify-center items-center">
                    <img src={img} alt={`Slide ${index}`} className="w-100 h-150" style={{ borderRadius: '20px' }}/>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedBack;
