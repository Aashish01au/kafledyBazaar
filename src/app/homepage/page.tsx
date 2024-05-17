import React from 'react'
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Image from 'next/image';
import fruits1 from './photos/fruits1.jpg'
import fruits2 from './photos/fruits2.jpg'
import fruits3 from './photos/fruits3.jpg'
import fruits4 from './photos/fruits4.jpg'
import { ArrowBack, ArrowForward, ArrowRight, Star, Telegram } from '@mui/icons-material';
import { Button } from '@mui/material';


const HomePage = () => {
  return (
    <div className="bg-[#F1F3F6] ">
    <div className="flex justify-around  mx-[100px] py-10 gap-5">
        {/* ============================================================================================= */}
           <div className="w-[25%] ">
            {/* all categories */}
            <div className="bg-white shadow-sm rounded-sm ">
   <div className="box bg-red-600 p-3 text-white uppercase font-medium">
    categories

   </div>
   
<ListItem>
    <ListItemButton>
      <ListItemText primary="Fruits"  />
   
    </ListItemButton>
   </ListItem> 
   <ListItem>
    <ListItemButton>
      <ListItemText primary="Vegatables" />
   
    </ListItemButton>
   </ListItem>
   </div>
   {/* Best saller */}
   <div className="bg-white shadow-sm rounded-sm mt-5">
   <div className="box bg-red-600 p-3 text-white uppercase font-medium">
    Best Sallers

   </div>
   <div className="flex gap-3 p-2">
    <Image width={86} height={63} src={fruits1} />
    <div className='p-3'>
        Custard apple
       <p> <Star/>  <Star/>  <Star/> </p>
       <p> Nrs: 280</p>
    </div>
   </div>
   <div className="flex gap-3 p-2">
    <Image width={86} height={63} src={fruits4} />
    <div className='p-3'>
        Custard apple
       <p> <Star/>  <Star/>  <Star/> </p>
       <p> Nrs: 280</p>
    </div>
   </div>
   <div className="flex gap-3 p-2">
    <Image width={86} height={63} src={fruits2} />
    <div className='p-3'>
        Custard apple
       <p> <Star/>  <Star/>  <Star/> </p>
       <p> Nrs: 280</p>
    </div>
   </div>
   <div className="flex gap-3 p-2">
    <Image width={86} height={63} src={fruits3} className=''/>
    <div className='p-3'>
        Custard apple
       <p> <Star/>  <Star/>  <Star/> </p>
       <p> Nrs: 280</p>
    </div>
   </div>

   </div>
   {/* best saller ends */}
       </div>
       {/* =============================================================================================== */}
       <div className="w-[50%]">

<div className="flex"></div>
<div className="bg-white shadow-sm rounded-sm  p-3">
<div className="flex justify-between items-center text-red-600">
    <ArrowBack />
    <ArrowForward/>
</div>
</div>
       <div className="bg-white shadow-sm rounded-sm mt-5">
   <div className="box flex bg-red-600 p-3 text-white uppercase font-medium">
 Featured Products
   </div>
   {/* flexx roe 1 */}
   <div className="flex">

   <div className="items-center gap-3 p-2">
    <Image width={210} height={145} src={fruits1} />
    <div className='p-3 text-center'>
        Custard apple
       <p> <Star/>  <Star/>  <Star/> </p>
       <p> Nrs: 280</p>
    </div>
   </div>
   
   <div className="items-center gap-3 p-2">
    <Image width={210} height={145} src={fruits2} />
    <div className='p-3 text-center'>
        Custard apple
       <p> <Star/>  <Star/>  <Star/> </p>
       <p> Nrs: 280</p>
    </div>
   </div>
   <div className="items-center gap-3 p-2">
    <Image width={210} height={145} src={fruits3} />
    <div className='p-3 text-center'>
        Custard apple
       <p> <Star/>  <Star/>  <Star/> </p>
       <p> Nrs: 280</p>
    </div>
   </div>
   

   
   </div>
  {/* flexx roe 2*/}
  <div className="flex">

<div className="items-center gap-3 p-2">
 <Image width={210} height={145} src={fruits1} />
 <div className='p-3 text-center'>
     Custard apple
    <p> <Star/>  <Star/>  <Star/> </p>
    <p> Nrs: 280</p>
 </div>
</div>

<div className="items-center gap-3 p-2">
 <Image width={210} height={145} src={fruits2} />
 <div className='p-3 text-center'>
     Custard apple
    <p> <Star/>  <Star/>  <Star/> </p>
    <p> Nrs: 280</p>
 </div>
</div>
<div className="items-center gap-3 p-2">
 <Image width={210} height={145} src={fruits3} />
 <div className='p-3 text-center'>
     Custard apple
    <p> <Star/>  <Star/>  <Star/> </p>
    <p> Nrs: 280</p>
 </div>
</div>



</div>

   </div>
{/*  our products */}
   <div className="bg-white shadow-sm rounded-sm mt-5">
   <div className="box flex bg-red-600 p-3 text-white uppercase font-medium">
   our products
   </div>
   {/* flexx roe 1 */}
   <div className="flex">

   <div className="items-center gap-3 p-2">
    <Image width={210} height={145} src={fruits1} />
    <div className='p-3 text-center'>
        Custard apple
       <p> <Star/>  <Star/>  <Star/> </p>
       <p> Nrs: 280</p>
    </div>
   </div>
   
   <div className="items-center gap-3 p-2">
    <Image width={210} height={145} src={fruits2} />
    <div className='p-3 text-center'>
        Custard apple
       <p> <Star/>  <Star/>  <Star/> </p>
       <p> Nrs: 280</p>
    </div>
   </div>
   <div className="items-center gap-3 p-2">
    <Image width={210} height={145} src={fruits3} />
    <div className='p-3 text-center'>
        Custard apple
       <p> <Star/>  <Star/>  <Star/> </p>
       <p> Nrs: 280</p>
    </div>
   </div>
   

   
   </div>
  {/* flexx roe 2*/}
  <div className="flex">

<div className="items-center gap-3 p-2">
 <Image width={210} height={145} src={fruits1} />
 <div className='p-3 text-center'>
     Custard apple
    <p> <Star/>  <Star/>  <Star/> </p>
    <p> Nrs: 280</p>
 </div>
</div>

<div className="items-center gap-3 p-2">
 <Image width={210} height={145} src={fruits2} />
 <div className='p-3 text-center'>
     Custard apple
    <p> <Star/>  <Star/>  <Star/> </p>
    <p> Nrs: 280</p>
 </div>
</div>
<div className="items-center gap-3 p-2">
 <Image width={210} height={145} src={fruits3} />
 <div className='p-3 text-center'>
     Custard apple
    <p> <Star/>  <Star/>  <Star/> </p>
    <p> Nrs: 280</p>
 </div>
</div>



</div>

   </div>
       </div>
       {/* ========================================================================================== */}
       <div className="w-[25%]">
       <div className="bg-white shadow-sm rounded-sm mt-5">
   <div className="box bg-red-600 p-3 text-white uppercase font-medium">
Our Services

   </div>
   <div className="flex gap-3 p-2">
    <Image width={86} height={63} src="" />
    <div className='p-3'>
    Free Shipping
       <p>For all order over $100</p>
    </div>
   </div>
   <hr />
   <div className="flex gap-3 p-2">
    <Image width={86} height={63} src="" />
    <div className='p-3'>
    Cash on delivery
       <p>100% money back</p>
    </div>
   </div>
   <div className="flex gap-3 p-2">
    <Image width={86} height={63} src="" />
    <div className='p-3'>
  
Special Gift Card
       <p>Offer Special bonuses</p>
    </div>
   </div>
   <div className="flex gap-3 p-2">
    <Image width={86} height={63} src="" />
    <div className='p-3 '>
    24/7 Support
       <p className='textr-sm'>Answer for questions</p>
    </div>
   </div>

   </div>
   <div className="bg-white shadow-sm rounded-sm mt-5">
   <div className="box bg-red-600 p-3 text-white uppercase font-medium">
   Newsletter

   </div>
   <div className="flex gap-3 p-2">
    <div className='p-3 items-center text-center gap-3'>


        <Telegram />
       <p>Get e-mail updates about our latest shop and special offers.  </p>
       <input  type="search" placeholder='your email address' className='my-3'/>
       <Button variant="contained" >
  Subscribe
</Button>
    </div>
   </div>

   </div>
       </div>
        </div>
        </div>
  )
}

export default HomePage