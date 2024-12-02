import React from 'react'

const Card = () => {
  return (
    <div className='w-[285px] h-[360px] bg-white rounded-2xl p-5'>
     <img src="../../src/assets/banner.jpg" alt="this is image" className=' w-[285px] rounded-2xl mb-5' />
     <h3 className='text-2xl font-semibold mb-3'>Model</h3>
     <p className='text-xl mb-3'>Price</p>
     <button className='text-xl border text-[rgb(149,56,226)] border-[rgb(149,56,226)] px-5 py-3 rounded-[200px] mb-4'>View Details</button>
    </div>
  )
}

export default Card
