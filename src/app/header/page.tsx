import Image from 'next/image'
import React from 'react'
import logo from './logo.jpg'
import { Badge, Button } from '@mui/material'
import {  Mail,   } from '@mui/icons-material'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PersonIcon from '@mui/icons-material/Person';
const HeaderPage = () => {
  return (
    <>
    <div className=" bg-[#252525]">
    <div className="container  ">
    <div className="flex justify-between items-center mx-[100px] py-3 ">
<div className="text-white text-sm">

<p>Customer Support: 9801127340</p>


</div>
<div className="flex items-center text-white gap-5 text-sm">
<span>Currency: NPR  <span> <ArrowDropDownIcon/></span> </span>
<span>Language: English <span> <ArrowDropDownIcon/></span> </span>
<span>Wishlist (0)</span>
</div>
        </div>
        <hr className='border-gray-700' />
        <div className="flex justify-between items-center mx-[100px] py-5 ">
<div className="">
<Image  className='w-[50px] h-[50px] rounded-full' src={logo}/>

</div>
<div className="">
<input type="search" placeholder=' searching' className='rounded-sm w-[500px] h-[35px]' />

</div>
<div className="flex items-center text-white gap-2">
<Badge badgeContent={4} className='text-red-400 '>
  <LocalMallIcon  className='text-white' />
</Badge>
<span className='text-red-600'>My Cart</span>

</div>
        </div>
        <div className="flex justify-between items-center mx-[100px] py-3 bg-red-500 rounded-md px-5  ">
<div className="text-white flex px-2 gap-5 font-medium">

<p>Home</p>
<p>All categories</p>
<p>About US</p>
<p>Contacts</p>


</div>
<div className="flex items-center text-white gap-5 text-sm">
<Button variant="contained" className='bg-yellow-500 hover:bg-yellow-400'  startIcon={<PersonIcon />} endIcon={<ArrowDropDownIcon />}
>
        Delete
      </Button>
</div>
        </div>
    </div>
    </div>
    </>
  )
}

export default HeaderPage