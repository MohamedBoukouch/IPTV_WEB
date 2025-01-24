import React,{useState} from 'react';
import { GoChevronDown, GoArrowUp } from "react-icons/go";

const Container = ({ question,reponse }) => {
  const [bgColor, setBgColor] = useState('bg-white');
  const [textColor, setTextColor] = useState('text-black');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setBgColor(prevColor => prevColor === 'bg-white' ? 'bg-white' : 'bg-white');
    setTextColor(prevColor => prevColor === 'text-black' ? 'text-black' : 'text-black');
    setIsExpanded(prevState => !prevState);
  };

  return (
    <div className='flex flex-col gap-2 '>
        <div 
        className={`${bgColor} ${textColor} font-titel font-bold text-xl p-4 ${isExpanded?'rounded-tl-[10px]  rounded-tr-[10px] sm:rounded-tl-[20px] sm:rounded-tr-[20px]':'rounded-[10px] sm:rounded-[20px]'}  flex justify-between cursor-pointer`} 
        onClick={handleClick}
        >
        {question}
        {isExpanded 
            ? <GoArrowUp className='text-white text-3xl' />
            : <GoChevronDown className='text-blue-600 text-3xl' />}
        </div>
        {
            isExpanded?
            <div className='text-white text-xl font-bold ml-16 mt-8 mb-8 mr-16'>
                {reponse}
            </div>:
            <div></div>
        }
    </div>
  );
};

const Slider1 = () => {
  return (
      <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-4'>
          <div className='flex items-start justify-start gap-3 mt-10 text-blue-600'>
            <div className='text-xl'>QUESTIONS / ANSWERS</div>
            <div className='bg-blue-600 w-20 h-0.5 mt-4'></div>
          </div>
          <div className='flex flex-col sm:flex-row items-center justify-center text-white text-4xl font-bold gap-3'>
            <h1>Frequently Asked</h1>
            <h1 className='bg-blue-600 p-3 rounded-[15px]'>Questions</h1>
          </div>
          </div>

          <div>
          {Container({
                question:"What Payment methods are available",
                reponse:"We accept a variety of payment methods for accessing our premium IPTV services, including Paypal, Credit or debit cards, Visa, MasterCard,"
            })}
            {Container({
                question:"What does the package include?",
                reponse:"When you subscribe to StreamTVUniverse, you get login credentials to our IPTV server with instructions for how to setup it on your device.",
            })}
            {Container({
                question:"What is the typical response time for a support question?",
                reponse:"Since you report us a support question we try to make our best to find out what is going on, depending on the case it could take more or less time, however a standard time could be minutes.",
            })}
            {Container({
                question:"What devices do you support?",
                reponse:"Our service is compatible with a wide range of devices, including smartphones, tablets, smart TVs, and streaming boxes. We support popular platforms like Android, iOS, Windows, macOS, and Linux, as well as popular streaming apps like IPTV Smarters, Perfect Player, and more.",
            })}
            {Container({
                question:"How long will it take to receive my order?",
                reponse:"We aim to email you within 5min – 1 hour of purchase to arrange setup of your order. Please note during busy periods at evenings and weekends orders may take up to 2 hours to process",
            })}
            {Container({
                question:"What content do you supply?",
                reponse:"We offer a full range of European, UK, US, CA, and Asian channels + 99 Countries with a 4k /Ultra HD quality",
            })}
            {Container({
                question:"What if i don't like your IPTV server?",
                reponse:"We offer a 7 Days Money Back Guarantee for Any Reason",
            })}
          </div>
          
        </div>
  )
}

export default Slider1
