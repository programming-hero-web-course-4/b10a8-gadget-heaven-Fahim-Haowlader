import React from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { useLocation,Link } from 'react-router-dom';
const Header = () => {
  const location = useLocation();
  console.log(location.pathname)
  return (
    <div className='flex text-white items-center justify-between bg-[rgb(149,56,226)] rounded-t-3xl py-7 px-28'>
      <div className='text-2xl font-bold'>Gadget Heaven</div>
      <div className='flex gap-7 text-xl font-semibold items-center justify-center'>
        <Link to="home">Home</Link>
        <p>Statistics</p>
        <Link to="/dashboard">Dsshboard</Link>
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
