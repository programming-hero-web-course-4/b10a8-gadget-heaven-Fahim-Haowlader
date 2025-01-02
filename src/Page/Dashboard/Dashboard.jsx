import React from 'react'
import { useState } from 'react'

import Cart from '../../Components/Cart/Cart'
import Wishlist from '../../Components/Wishlist/Wishlist'

const Dashboard = () => {
  const [showCart, setshowCart] = useState(true)
  return (
    <div>
        <div className='bg-[rgb(149,56,226)] text-white'>
        <h1 className='text-center py-6 text-4xl font-bold'>Dashboard</h1>
        <p className='text-center p-1'>Explore the latest gadgets that will take your experience to the next level. From smart devices to
            </p>
            <p className='text-center p-1'> the coolest accessories, we have it all!</p>
            <div className='flex gap-10 w-[300px] mx-auto py-10'>
                <button onClick={()=> setshowCart(true)} className={`${showCart ? 'border font-semibold py-3 px-12 text-xl border-white rounded-[50px] text-[rgb(149,56,226)]  bg-white' : 'border py-3 px-12 [rgb(149,56,226)] text-xl border-white rounded-[50px] '}   `}>
                Card
               </button>
                <button onClick={()=> setshowCart(false)} className={`${showCart ? 'border py-3 px-12 [rgb(149,56,226)] text-xl border-white rounded-[50px] ' : 'border font-semibold py-3 px-12 text-xl border-white rounded-[50px] text-[rgb(149,56,226)]  bg-white' }   `}>
               Wishlist 
                </button>
            </div>
        </div>
        <div className={`${showCart ? "block" : "hidden"} `}>
            <Cart/>
        </div>
        <div className={`${showCart ? "hidden" : "block "} `}>
          <Wishlist/>
        </div>
      
    </div>
  )
}

export default Dashboard
