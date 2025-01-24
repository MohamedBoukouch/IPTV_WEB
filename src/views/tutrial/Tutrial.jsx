import React from 'react';
import back2 from '../../assets/back2.jpg';
import Navbar from '../../components/navBar/Navbar';
import Footer from '../../components/footer/Footer';
import Android from '../../assets/Android.png';
import Apple from '../../assets/Apple.webp';
import smartTv from '../../assets/smartTv.png';
import mag_box from '../../assets/mag_box.png';
import mac_microsoft from '../../assets/mac_microsoft.png';

const Tutrial = () => {
    return (
        <div className="">
          <div
            className="bg-cover bg-center relative"
            style={{ backgroundImage: `url(${back2})` }}
          >
            <div className="absolute inset-0 bg-black opacity-90 z-10"><Navbar /></div> 
            
            <div className='flex justify-center items-center p-56'>
              <div className="rounded-[10px] text-white p-3 text-center font-bold text-7xl font-titel w-fit relative z-20">
                Installation Tutorial
              </div>
            </div>
          </div>
          <div className='bg-gray-900 text-white pr-40 pl-40 flex flex-col gap-5 pt-12 pb-7'>
            
            <div className='text-4xl font-bold text-center' >
              We’re the #1 IPTV service in the country, with over 99% signal reliability.
            </div>

            <div className='flex gap-5'>

            <div className='w-full border-white rounded-[02%] border-[3px] p-4 flex flex-col gap-5 '>
                <div className='flex flex-col items-center justify-center text-center'>
                <img alt='Image' src={Android} className='w-80 text-center' />
                <p>Android</p>
                <h1 className='text-blue-600 font-bold text-3xl'>How to setup IPTV on Android with IPTV Smarters Player</h1>
                </div>
                <div className='flex flex-col gap-3'>
                  <p>
                  ◽ Step 1:
                  Start by downloading IPTV Smarters app through this URL :
                  </p>
                  <a href='https://www.iptvsmarters.com/smarters.apk' className='text-blue-600'>https://www.iptvsmarters.com/smarters.apk</a>
                  <p>
                  ◽ Step 2:
                  Open the app once downloaded and Enter the login details
                  </p>
                  <p>
                  ◽ Step 3:
                  Enter the login details that we have provided you after you get a subscription with us
                  Now Click on “ADD USER” to proceed to the next section.
                  </p>
                  <p>
                  ◽ Step 4:
                  Wait some seconds.
                  </p>
                  <p>
                  ◽ Step 5:
                  Now click on “Live TV” icon as depicted in the image via a red arrow.
                  </p>
                  <p>
                  ◽ Step 6:
                  Now you must select the channel group that you want to watch and proceed to the next section.
                  </p>
                  <p>
                  ◽ Step 7:
                  Now you must click on the channel name and then double click on the small screen to turn into full screen as the final step.
                  </p>
                  <p>✔ DONE </p>
                </div>
              </div>

              <div className='w-full border-white rounded-[02%] border-[3px] p-4 flex flex-col gap-5 '>
                <div className='flex flex-col items-center justify-center text-center'>
                <img alt='Image' src={Apple} className='w-60 text-center text-white' />
                <p>Apple / IOS</p>
                <h1 className='text-blue-600 font-bold text-3xl'>How To Setup IPTV On Apple/IOS With IPTV Smarters Player</h1>
                </div>
                <div className='flex flex-col gap-3'>
                  <p>
                  ◽ Step 1:
                   Start by downloading IPTV Smarters app from the Apple Store through this URL :
                  </p>
                  <a href='https://apps.apple.com/smarters-player' className='text-blue-600'>https://apps.apple.com/smarters-player</a>
                  <p>
                  or :
                  you can search for it on App store
                  install the app on your IOS device.
                  </p>
                  <p>
                  ◽ Step 2:
                  Open the app once downloaded and Enter the login details.
                  </p>
                  <p>
                  ◽ Step 3:
                  Enter the login details that we have provided you after you get a subscription with us
                  Now Click on “ADD USER” to proceed to the next section.
                  </p>
                  <p>
                  ◽ Step 4:
                  Now click on “Live TV” icon as depicted in the image via a red arrow.
                  </p>
                  <p>
                  ◽ Step 5:
                  Now you must select the channel group that you want to watch and proceed to the next section.                  </p>
                  <p>
                  ◽ Step 6:
                  Now you must click on the channel name and then double click on the small screen to turn into full screen as the final step.                  </p>
                  <p>
                  ◽ Step 7:
                  To add EPG no need to add any EPG url, Just click on “Install EPG” .
                  </p>
                  <p>✔ DONE </p>
                </div>
              </div>
            </div>

            <div className='flex gap-5 '>
            <div className='border-white rounded-[02%] border-[3px] p-4 flex flex-col gap-5 w-full '>
                <div className='flex flex-col items-center justify-center text-center'>
                <img alt='Image' src={smartTv} className='w-60 text-center text-white' />
                <p>Smart TV</p>
                <h1 className='text-blue-600 font-bold text-3xl'>How To Setup IPTV On SMART TV</h1>
                </div>
                <div className='flex flex-col gap-3'>
                  <p>
                  ◽ Step 1:
                  You can download SetIPTV / NetIPTV / Smart IPTV from your TV store on Samsung, LG …
                  </p>
                  <p>
                  ◽ Step 2:
                  After the installation, open the app the you will find MAC Address on screen
                  </p>
                  <p>
                  ◽ Step 3:
                  Send us the MAC address via Whatsapp/Email/Live Chat
                  </p>
                  <p>
                  ◽ Step 4:
                  After few minutes, restart/reboot your TV and Open the app
                  </p>
                  <p>✔ DONE </p>
                </div>
              </div>
              <div className='w-full border-white rounded-[02%] border-[3px] p-4 flex flex-col gap-5 '>
                <div className='flex flex-col items-center justify-center text-center'>
                <img alt='Image' src={mag_box} className='w-60 text-center text-white' />
                <p>Smart TV</p>
                <h1 className='text-blue-600 font-bold text-3xl'>How To Setup IPTV On SMART TV</h1>
                </div>
                <div className='flex flex-col gap-3'>
                  <p>
                  ◽ Step 1:
                  You can download SetIPTV / NetIPTV / Smart IPTV from your TV store on Samsung, LG …
                  </p>
                  <p>
                  ◽ Step 2:
                  After the installation, open the app the you will find MAC Address on screen
                  </p>
                  <p>
                  ◽ Step 3:
                  Send us the MAC address via Whatsapp/Email/Live Chat
                  </p>
                  <p>
                  ◽ Step 4:
                  After few minutes, restart/reboot your TV and Open the app
                  </p>
                  <p>✔ DONE </p>
                </div>
              </div>
              <div className=' w-full border-white rounded-[02%] border-[3px] p-4 flex flex-col gap-5 '>
                <div className='flex flex-col items-center justify-center text-center'>
                <img alt='Image' src={mac_microsoft} className='w-80 text-center text-white' />
                <p>Smart TV</p>
                <h1 className='text-blue-600 font-bold text-3xl'>How To Setup IPTV On SMART TV</h1>
                </div>
                <div className='flex flex-col gap-3'>
                  <p>
                  ◽ Step 1:
                  You can download SetIPTV / NetIPTV / Smart IPTV from your TV store on Samsung, LG …
                  </p>
                  <p>
                  ◽ Step 2:
                  After the installation, open the app the you will find MAC Address on screen
                  </p>
                  <p>
                  ◽ Step 3:
                  Send us the MAC address via Whatsapp/Email/Live Chat
                  </p>
                  <p>
                  ◽ Step 4:
                  After few minutes, restart/reboot your TV and Open the app
                  </p>
                  <p>✔ DONE </p>
                </div>
              </div>
              <div></div>
              <div></div>
            </div>
            
          </div>
          <Footer />
        </div>
      );
}

export default Tutrial
