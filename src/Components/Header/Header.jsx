import React from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { useLocation,Link, useNavigate, NavLink } from 'react-router-dom';
import {Helmet} from "react-helmet";
const Header = () => {
  const navigate = useNavigate()
  const location = useLocation();
  console.log(location.pathname)
  return (
    <div className={`flex items-center  justify-between ${location.pathname !== "/home" ? "bg-white text-[rgb(149,56,226)]":"bg-[rgb(149,56,226)] text-white"}  rounded-t-3xl py-7 px-28`}>
      <div className='text-2xl font-bold'>Gadget Heaven</div>
      <div className='flex gap-7 text-xl font-semibold items-center justify-center'>
       
        <Link to="home">Home</Link>
        <NavLink to='/statistics' className={({isActive})=> isActive ? "text-black" :'' }>Statistics</NavLink>
        <NavLink to='/offers' className={({isActive})=> isActive ? "text-black" :'' }>Offers</NavLink>
        <NavLink to="/dashboard" className={({isActive})=> isActive ? "text-black" : '' }>Dashboard</NavLink>
      </div>
      <div className='flex gap-6 text-black '>
        <div onClick={()=> navigate('/dashboard')} className='bg-white h-9 w-9 p-2 rounded-full flex items-center justify-center text-5xl '>
            
        <FiShoppingCart/>
        </div>
        <div onClick={()=> navigate('/dashboard')} className='bg-white h-9 w-9 p-2 rounded-full flex items-center justify-center text-5xl'>
        <IoMdHeartEmpty/>

        </div>
      </div>
    </div>
  )
}

export default Header
