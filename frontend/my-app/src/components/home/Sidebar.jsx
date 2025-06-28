import { Settings } from 'lucide-react'
import React from 'react'

export default function Sidebar() {
  return (
    <div className='relative bg-[#3C3D37]/50 text-[#ECDFCC] w-1/3 md:w-1/5 h-full'>
     <p className='mt-5 text-lg ml-2 cursor-pointer'>Chat with AI</p>
     <div className="w-full h-0.5 bg-[#ECDFCC]/40"></div>
     <p className='mt-2 text-lg ml-2 cursor-pointer'>Chat History</p>
      <div className="absolute bottom-14 w-full h-0.5 bg-[#ECDFCC]/40"></div>
      <div className=" absolute bottom-4 flex flex-col mt-2 ml-2 ">
        <div className="flex cursor-pointer">
          <Settings size={20} className='mt-1.5'/>
        <p className='ml-1 text-lg'>Setting</p>
        </div>
        
      </div>
     
    </div>
  )
}
