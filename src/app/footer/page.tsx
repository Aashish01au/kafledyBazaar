import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footerpage = () => {
  return (
    <>
    <div className="bg-[#252525] py-5">

    <div className="flex justify-around  mx-[100px] py-10 ">
<div className=" items-center">
    <span className='uppercase text-gray-300'>Contact Us</span>
    <div className=''>
  <LocationOnIcon  className=' text-white bg-gray-600 '/>  <span className='text-gray-500'> Mid-Baneshwor Kathmandu</span>
        
    </div>
    <div className=''>
  <CallIcon  className=' text-white bg-gray-600'/>  <span className='text-gray-500'>9801127340 [Apekshya Ghimire]</span>
        
    </div>
    <div className=''>
  <EmailIcon  className=' text-white bg-gray-600'/>  <span className='text-gray-500'>apeksha.ghimire@softechfoundation.com</span>
        
    </div>
  
</div>

<div className="">
    <span className='uppercase text-gray-300 '>CUSTOMER SERVICE</span>
   <div className="">
   <span className='text-gray-500'>My Account</span>
  
   </div>
</div>
<div className="">
    <span className='uppercase text-gray-300'>CORPORATION</span>
   <div className="">
   <span className='text-gray-500'>About us</span>
  
   </div>
</div>
<div className="">
    <span className='uppercase text-gray-300'>WHY CHOOSE US</span>
   <div className="">
   <span className='text-gray-500'>Contact us</span>
  
   </div>
</div>
        </div>
    </div>
    <div className="bg-[#121212]">
    <div className="flex justify-between  mx-[100px] py-3 ">
    <div className="">
   <FacebookIcon className='text-white ms-10'/>
    </div>
    <div className="">
    <span className='text-gray-500 text-sm py-3 text-end'> Copyright © 2024 Softech Foundation Pvt. Ltd | Developed by : Softech Foundation</span>
    </div>
    </div>
    </div>

    </>
  )
}

export default Footerpage