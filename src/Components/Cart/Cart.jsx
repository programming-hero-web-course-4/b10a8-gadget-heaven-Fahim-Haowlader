import React from 'react'
import Cartitem from '../Cartitem/Cartitem'

const Cart = () => {
  return (
    <div className='px-32 py-16'>
      <div className='flex justify-between items-center pb-3'>
        <div className=''><h1 className='text-2xl font-bold'>Cart</h1></div>
        <div className='flex gap-5 justify-center items-center'>
            <p className='text-2xl font-bold'>Total Cost : 1000 </p>
            <button className=' border text-xl py-2 px-5 rounded-3xl font-semibold  border-[rgb(149,56,226)] text-[rgb(149,56,226)]'>Short by price</button><button className=' border text-xl py-2 px-5 rounded-3xl font-semibold  border-[rgb(149,56,226)] text-[rgb(149,56,226)]'>Purchase</button>

        </div>
      </div>
        <Cartitem/>
        <Cartitem/>
    </div>
  )
}

export default Cart
