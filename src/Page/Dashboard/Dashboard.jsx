import React from 'react'
import Header from '../../Components/Header/Header'
import Cart from '../../Components/Cart/Cart'

const Dashboard = () => {
  return (
    <div>
        <Header/>
        <div className='bg-[rgb(149,56,226)] text-white'>
        <h1 className='text-center py-6 text-4xl font-bold'>Dashboard</h1>
        <p className='text-center p-1'>Explore the latest gadgets that will take your experience to the next level. From smart devices to
            </p>
            <p className='text-center p-1'> the coolest accessories, we have it all!</p>
            <div className='flex gap-10 w-[300px] mx-auto py-10'>
                <button className='border py-3 px-12 text-xl border-white rounded-[50px]'>
                Card
               </button>
                <button className='border py-3 text-xl px-12 border-white rounded-[50px]'>
               Wishlist 
                </button>
            </div>
        </div>
        <div>
            <Cart/>
        </div>
      
    </div>
  )
}

export default Dashboard
