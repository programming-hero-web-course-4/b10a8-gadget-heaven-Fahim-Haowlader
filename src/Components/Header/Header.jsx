import React from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
const Header = () => {
  return (
    <div className='flex text-white items-center justify-between bg-[rgb(149,56,226)] rounded-t-3xl py-7 px-28'>
      <div className='text-2xl font-bold'>Gadget Heaven</div>
      <div className='flex gap-7 text-xl font-semibold items-center justify-center'>
        <p>Home</p>
        <p>Statistics</p>
        <p>Dsshboard</p>
        <p>Dsshboard2</p>
      </div>
      <div className='flex gap-6 text-black '>
        <div className='bg-white h-9 w-9 p-2 rounded-full flex items-center justify-center text-5xl '>
            
        <FiShoppingCart/>
        </div>
        <div className='bg-white h-9 w-9 p-2 rounded-full flex items-center justify-center text-5xl'>
        <IoMdHeartEmpty/>

        </div>
      </div>
    </div>
  )
}

export default Header
