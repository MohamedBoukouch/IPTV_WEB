import React, { useState } from 'react';

const Slider2 = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
      setIsChecked(!isChecked);
    };

    return (
        <div className='flex-col text-black font-titel'>
            <div className='bg-blue-100 p-10 flex flex-col gap-5 mt-10 rounded-xl'>
                <p className='font-bold text-xl'>Your Order</p>
                <div className='flex justify-between text-gray-700 font-bold font-titel'>
                    <p>Product</p>
                    <p>Subtotal</p>
                </div>
                <div>

                </div>
                <div className='flex flex-col gap-7'>
                    <div className='flex justify-between text-gray-700 font-bold font-titel'>
                        <p>Product</p>
                        <p>	$319.97</p>
                    </div>
                    <div className='flex justify-between text-gray-700 font-bold font-titel'>
                        <p>Product</p>
                        <p>	$319.97</p>
                    </div>
                </div>
            </div>
            <div className='bg-blue-100 p-10 flex flex-col gap-5 mt-10 rounded-xl'>
                <p className='font-bold text-xl'>Pay with PayPal or Credit/debit card</p>
                
                <div className='w-full bg-white p-5 '>
                    After placing your order, message us on WhatsApp for quick delivery. We're excited to assist and ensure you're satisfied!
                </div>
                <div>
                    Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <span ><a href='#' className='text-blue-600'>Privacy policy</a></span>.
                </div>

                <div className="flex items-center gap-2">
                {/* Checkbox */}
                <input
                    type="checkbox"
                    id="simple-checkbox"
                    checked={isChecked}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                {/* Label */}
                <p className='text-gray-700'>
                I have read and agree to the website <span className='text-blue-600'>terms and conditions </span> <span className='text-red-700 font-bold text-xl'>*</span>
                </p>
                </div>
                <button className='bg-blue-600 w-full pt-3 pb-3 sm:pt-5 sm:pb-5 pr-4 pl-4 rounded-[8px] text-white   '>
                    Place Order
                </button>
            </div>

        </div>
    );
}

export default Slider2
