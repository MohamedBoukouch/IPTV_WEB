import React from 'react'

const Slider2 = () => {
  return (
    <div className='bg-white p-10 w-1/2 flex flex-col gap-5 mt-10 rounded-[1%]'>
        <div className='bg-blue-600 p-5 text-white text-center font-titel text-xl'>
            Any Questions? Ask Us!!
        </div>
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
        <button className='bg-blue-600 w-1/2 pt-3 pb-3 sm:pt-5 sm:pb-5 pr-4 pl-4 rounded-[8px] text-white   '>
        SUBMIT QUESTIONS
        </button>
      </div>
  )
}

export default Slider2
