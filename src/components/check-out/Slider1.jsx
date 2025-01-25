import React from 'react'

const Slider1 = () => {
  return (
    <div className='flex-col text-black'>
      <div className='bg-blue-100 p-10 flex flex-col gap-5 mt-10 rounded-xl'>
        <p className='font-bold text-xl'>Billing Details</p>
        <div className="flex flex-col gap-2 w-full">
        <label className="text-black ">
            Full Name <span className="text-red-500">*</span>
        </label>
        <input
            type="text"
            placeholder="Your Name.."
            className="rounded-[8px] bg-white p-5 w-full text-black"
        />
        </div>
        <div className="flex flex-col gap-2 w-full">
        <label className="text-black ">
        Email Address <span className="text-red-500">*</span>
        </label>
        <input
            type="email"
            placeholder="Email Address.."
            className="rounded-[8px] bg-white p-5 w-full text-black"
        />
        </div>
        <div className="flex flex-col gap-2 w-full">
        <label className="text-black ">
            Country / Region <span className="text-red-500">*</span>
        </label>
        <input
            type="text"
            placeholder="Country / Region.."
            className="rounded-[8px] bg-white p-5 w-full text-black"
        />
        </div>
        <div className="flex flex-col gap-2 w-full">
        <label className="text-black ">
            Whatsapp Number <span className="text-red-500">*</span>
        </label>
        <input
            type="text"
            placeholder="Whatsapp Number.."
            title="Full Name"
            className="rounded-[8px] bg-white p-5 w-full text-black"
        />
        </div>
      </div>
      <div className='bg-blue-100 p-10 flex flex-col gap-5 mt-10 rounded-xl'>
        <p className='font-bold text-xl'>Additional Information</p>
        <div className="flex flex-col gap-2 w-full">
        <label className="text-black ">
        Order notes (optional) 
        </label>
        <input
            type="text"
            placeholder="Notes about your order, e.g. special notes for delivery."
            className="rounded-[8px] bg-white p-5 w-full text-black"
        />
        </div>
      </div>
    </div>
  )
}

export default Slider1
