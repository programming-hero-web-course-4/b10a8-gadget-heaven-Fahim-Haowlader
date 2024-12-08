import React from 'react'

const Cartitem = () => {
  return (
    <div>
      <div className=' bg-white flex my-5 gap-10 rounded-xl justify-between items-center p-6'>
        <div><img src="../../src/assets/banner.jpg" alt="image of the product" className='w-[200px] h-[140px] rounded-xl object-cover'  /></div>
        <div className='space-y-2'>
          <h3 className='text-2xl font-bold pb-2'>Samsung Galaxy S23 Ultra</h3>
          <p className='text-lg text-gray-500 pb-2'>Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge display. </p>
          <h4 className='text-xl font-bold'>Price : $ 999.99 </h4>
        </div>
        <div className='w-[150px] flex justify-center items-center'>
          <h3>Delet</h3>
        </div>
      </div>
    </div>
  )
}

export default Cartitem
