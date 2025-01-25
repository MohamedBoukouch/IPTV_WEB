import React,{useState} from 'react';
import Navbar from '../../components/navBar/Navbar';
import Footer from '../../components/footer/Footer';
import { FaCheckCircle } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import image1 from '../../assets/services.webp';
import image2 from '../../assets/devices.png';
import packImage from '../../assets/pack.webp';
import Streaming_Channels from '../../assets/Streaming-Channels.jpg';
import Channels_popular from '../../assets/Channels-popular.jpg';
import Devices_2 from '../../assets/Devices_2.webp';
import { HiArrowUpCircle } from "react-icons/hi2";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";


const BuyProduct = () => {
   
  const [clickedContainer, setClickedContainer] = useState(null);

  const navigate = useNavigate();
  const handleClick = ({ titel, prix }) => {
    setOrders(prevOrders => [...prevOrders, order]);
    navigate("/buy-product", { state: { titel, prix } });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleViewCartClick = () => {
    // Navigate to checkout page and pass the orders list via state
    navigate('/checkout', { state: { orders } });
  };


  const container=({titel,prix},index)=>{
    return (
      <div key={index} className='flex flex-col w-1/4 items-center justify-center  gap-2 cursor-pointer' >
        <img onClick={()=>handleClick({titel,prix})} alt='Image Pack' src={packImage} />
        <p className='font-bold text-xl text-center'>
        {titel}
        </p>
        <p className='text-blue-600 font-bold text-xl'>
        {prix}
        </p>
        <div className='flex flex-row items-center justify-center gap-3'>
        <button className='bg-blue-600 p-3 rounded-md w-full flex gap-3 items-center justify-center'
          onClick={() => setClickedContainer(index)} >
          Order Now
          {clickedContainer === index ? (
              <FaCheck className='text-white text-2xl' />
          ) : null}
        </button>
        <div>
          {clickedContainer === index ? (
            <p className='text-[15px] text-center text-blue-600' onClick={()=>handleViewCartClick()}>View.cart</p>
          ) : null}
        </div>
        </div>
      </div>
    );
  }
  
  const location = useLocation();
  const { titel, prix } = location.state || {};

    return (
        <div className="bg-black text-white flex flex-col min-h-screen ">
            <Navbar />
            <div className="flex-grow flex  flex-col items-center justify-center  gap-8 pb-30 pr-28 pl-28">
                <div className="flex gap-20 h-full justify-between p-12 bg-gray-800 mx-10 rounded-xl ">
                    <div className="flex flex-col gap-4 text-xl flex-[1.5]">
                        <div className="flex">
                            <p className="text-blue-600">Home</p>
                            <p>/</p>
                            <p className="text-blue-600">Price & Plans</p>
                            <p>/</p>
                            <p>{titel || "Product Title"}</p>
                        </div>
                        <div className="text-xl font-bold">
                            {titel || "Product Title"}
                        </div>
                        <div className="text-blue-600 text-xl font-bold">
                            {prix || "Product Price" }
                        </div>
                        <div className="flex gap-4">
                            <div className="bg-white text-black pr-6 pl-6 pt-2 pb-2 rounded-[5%]"><input type='number' className='w-8' defaultValue={1}/></div>
                            <div className="bg-blue-600 text-white pr-7 pl-7 pt-2 pb-2 rounded-[5%]">Order Now</div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <FaCheckCircle className="text-green-600" />
                            <p className="font-bold">Access over 22,000 live channels</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <FaCheckCircle className="text-green-600" />
                            <p className="font-bold">Enjoy zero-buffer streaming</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <FaCheckCircle className="text-green-600" />
                            <p className="font-bold">Simple set-up. Perfect privacy</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <FaCheckCircle className="text-green-600" />
                            <p className="font-bold">Money-back guarantee for peace of mind</p>
                        </div>
                        <div>
                        <button
                          className="flex gap-4 justify-center items-center bg-blue-600 p-3 rounded-xl w-full hover:bg-blue-900"
                          onClick={() => {
                            window.open("https://wa.me/212682950546", "_blank");
                          }}
                        >
                          <IoLogoWhatsapp />
                          Whatsapp Us for Instant Service
                        </button>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1">
                        <div className="flex-1">
                            <img 
                                alt="img1" 
                                src={image1} 
                                className="w-full h-full object-cover rounded-lg" 
                            />
                        </div>
                        <div className="flex-1 mt-4">
                            <img 
                                alt="img2" 
                                src={image2} 
                                className="w-full h-full object-cover rounded-lg" 
                            />
                        </div>
                    </div>
                </div>
                <div className='text-3xl font-bold text-start'>Works With All Your Devices</div>
                    <img alt='Devices_2' src={Devices_2} />
                <div className='text-3xl font-bold text-center'>Stream All Your Favorite Premium Networks and Channels - All Included!</div>
                <div className='flex flex-col bg-white ml-52 mr-52'>
                  <img alt='Channels_popular' src={Channels_popular} />
                  <img alt='Streaming_Channels' src={Streaming_Channels} />
                </div>
                <button className='bg-white rounded-2xl p-4 flex gap-3 text-blue-600 font-bold items-center'>
                  <IoLogoWhatsapp
                  className='text-blue-600 text-xl'
                  />
                  GET YOUR PREMIUM IPTV
                </button>
            </div>
            <div className='flex flex-col pr-24 pl-24 gap-5 text-xl'>
            <div className='w-full flex flex-col gap-3'>
              <p className='text-4xl font-bold text-white'>Subscription Details:</p>
              <div className='bg-blue-600 h-1 w-full'></div>
            </div>
            <div className='text-start flex flex-col gap-4 pb-40'>
              <p className='text-3xl font-bold'>
              Unlock a World of Entertainment with Our One Month – IPTV Subscription
              </p>
              <p className='text-3xl font-bold'>
              Channels Available
              </p>
              <p>
                With our 1 Month Premium <span><a href='http://localhost:5173/' className='text-blue-600'>IPTV Subscription </a></span>, you can enjoy access to over 22,000 live TV channels from around the world. This includes a wide variety of content such as movies, sports, news, and entertainment, ensuring that there’s something for everyone in your household. Whether you’re a fan of international shows or local favorites, our extensive channel lineup has you covered!
              </p>
              <p>United states , United kingdom , Ausralia , Canada, France, Belgium, Switzerland, Spain, Portugal, Italy, Germany, Netherlands, Arabic, , Latino, Turkey, Canada, and more …</p>
              <p className='text-3xl font-bold'>
              Device Compatibility
              </p>
              <p>
              Our IPTV service is compatible with a wide range of devices, making it easy for you to watch your favorite content anytime, anywhere. You can stream on:
              </p>
              <ul>
                <li>◽ Amazon Firestick and Fire TV</li>
                <li>◽ Android devices (smartphones, tablets, Android TV)</li>
                <li>◽ iOS devices (iPhone, iPad, Apple TV)</li>
                <li>◽ IPTV set-top boxes (MAG254, MAG256, MAG322, etc.)</li>
                <li>◽ Smart TVs (Samsung, LG, Sony, etc.)</li>
                <li>◽ Computers (Windows, macOS)</li>
                <li>◽ Chromecast</li>
                <li>◽ Roku</li>
                <li>◽ Kodi</li>
                <li>◽ Kodi</li>
                <li>◽ Dreamlink</li>
                <li>◽ Formuler</li>
              </ul>
              <p>No matter what device you prefer, our subscription ensures a smooth and enjoyable viewing experience.</p>
              <p className='text-3xl font-bold'>
              Key Features and Benefits
              </p>
              <ul>
                <li>◽ <span className='font-bold'>Extensive Channel Selection:</span>Access to over 30,000 live channels from various countries, including the USA, UK, Canada, and more.</li>
                <li>◽ <span className='font-bold'>High-Quality Streaming:</span>Enjoy your favorite shows and movies in HD, FHD, and even 4K resolution for stunning visuals.</li>
                <li>◽ <span className='font-bold'>Video On Demand (VOD):</span> Explore a vast library of on-demand content, including the latest movies and TV shows.</li>
                <li>◽ <span className='font-bold'>User-Friendly Interface:</span> Easily navigate through channels and content with our intuitive interface.</li>
                <li>◽ <span className='font-bold'>24/7 Customer Support:</span> Our dedicated support team is available to assist you anytime you need help.</li>
                <li>◽ <span className='font-bold'>Reliable Streaming:</span>Experience minimal downtime with our high uptime guarantee.</li>
                <li>◽ <span className='font-bold'>Flexible Subscription:</span> Perfect for those who want to try our service without a long-term commitment.</li>
              </ul>
              <ul>
                <li>1. <span className='font-bold'>Choose Your Subscription:</span>Select the 1 Month Premium IPTV Subscription.</li>
                <li>2. <span className='font-bold'>Order Now:</span>Click on the “Order Now” button to start the process.</li>
                <li>3. <span className='font-bold'>Fill in Your Details:</span> Provide your name, WhatsApp number, email address, device type, and any additional information.</li>
                <li>4. <span className='font-bold'>Secure Payment:</span> Complete your payment through our secure system.</li>
                <li>5. <span className='font-bold'>Receive Your Details:</span> Get your login credentials via email shortly after your purchase.</li>
                <li>6. <span className='font-bold'>Start Streaming:</span>Enjoy instant access to your favorite channels!</li>
              </ul>
              <p className='text-3xl font-bold'>
              Why Choose Our Premium IPTV Subscription?
              </p>
              <p>
              Our IPTV service is a trusted provider that offers an unbeatable combination of <span className='font-bold'>22,000 live channels</span>, a vast VOD library, and reliable streaming. The <span className='font-bold'>1 Month Premium Subscription</span> is perfect for those who want to experience our service without a long-term commitment, allowing you to explore all the amazing content we have to offer.
              </p>
              <p>
              Subscribe to our <span className='font-bold'>1 Month Premium – IPTV Subscription</span> today and elevate your entertainment experience!
              </p>
              <div className='flex items-center justify-center mt-5 mb-5'>
              <button className='bg-white rounded-2xl p-4 flex  justify-center gap-3 text-blue-600 font-bold items-center w-60'>                  
                Subscribe Today
                <HiArrowUpCircle
                className='text-blue-600 text-xl'
                />
              </button>
              </div>
              <div className='border-2 border-blue-700 flex flex-row gap-4 p-5 rounded-lg justify-center items-center'>
                  <p className='w-full text-center font-bold text-4xl'>
                  Need custom services?
                  </p>
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
              {/*Les Packes*/}
              <div className='flex flex-col items-center justify-center mt-10 gap-5'>
                  <p className='text-2xl'>Related products</p>
                  <div className='flex gap-4 '>
                      {/*1*/}
                      {container({
                        titel:"12 Months Subscription – 4 Connections",
                        prix:"$159.99",},
                        1
                      )}
                      {/*2*/}
                      {container({
                        titel:"12 Months Subscription – 2 Connections",
                        prix:"$97.99",},
                        2
                      )}
                      {/*3*/}
                      {container({
                        titel:"Luxury Plan – 12 Months Subscription",
                        prix:"$69.99",},
                        3
                      )}
                      {/*4*/}
                      {container({
                        titel:"Premium IPTV – 3 Months Subscription",
                        prix:"$39.99",},
                        4
                      )}
                  </div>
              </div>
            </div>
            </div>

            <Footer />
        </div>
    );
};

export default BuyProduct;
