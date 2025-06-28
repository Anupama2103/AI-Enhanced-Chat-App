import React from 'react'
import { Menu } from 'lucide-react';
// import { useState } from 'react';

export default function Nav({menu,setMenu}) {
  // const [visible,setVisible] = useState(true);
  return (
    <div className='bg-[#3C3D37] text-[#ECDFCC] pt-4 w-full h-16 flex justify-between '>
      <div className=" block md:hidden ml-3 cursor-pointer" onClick={()=>setMenu(!menu)}>
        <Menu />
      </div>
      
      <p className='text-2xl font-extrabold '>AITalks</p>
      <a className='hidden md:block'>Home</a>
      <button className='rounded-full h-10 w-10 border-2 mr-3 cursor-pointer'>P</button>
      {/* <button className='right-0 border-2'>Logout</button> */}
    </div>
  )
}
