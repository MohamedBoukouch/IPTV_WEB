import React from 'react';
import ranking from '../../assets/ranking.png';

const BrandInfo = () => {
  return (
    <div className=''>
    <div className='bg-white flex text-black py-16 px-16 rounded-[20px] justify-center items-center space-x-10'>
      <div className='flex-col '>
        <h1 className='text-4xl'>
        WorldWide Channels
        </h1>
        <p>
        Watch US, UK, CA, and international channels.
        </p>
      </div>
      <div className='w-2 h-70 bg-black'></div>
      <div>
      <h1 className='text-4xl'>
        On-Demand VOD
        </h1>
        <p>
        Enjoy a limitless selection of updated movies and series.
        </p>
      </div>
      <div className='w-1 h-70 bg-black'></div>
      <div>
      <h1 className='text-4xl'>
        High Quality Video
        </h1>
        <p>
        Stream in HD, Full HD, and 4K on all your devices without freezing. 
        </p>
      </div>
      
    </div >
    <div className='flex justify-center mt-4'>
        <img alt='ranking' src={ranking} className='' />
    </div>
    </div>
  )
}

export default BrandInfo
