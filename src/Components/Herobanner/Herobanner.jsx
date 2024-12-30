import React from 'react'

const Herobanner = () => {
  return (
    <div>
    <div className='bg-[rgb(149,56,226)] rounded-b-3xl relative'>
      <p className='text-5xl text-center text-white font-bold pt-7 pb-2 '>Upgrade Your Tech Accessorize with</p> 
      <p className='text-5xl text-center text-white font-bold pt-2 pb-8 '> Gadget Heaven Accessories</p>
      <p className='text-white text-center text-[14px] '>Explore the latest gadgets that will take your experience to the next level. From smart devices to
        </p>
        <p className='text-white text-center text-[14px] pt-1'> the coolest accessories, we have it all!</p>
        <div className='py-9 pb-[210px] flex items-center justify-center'>
            <button className='text-xl text-[rgb(149,56,226)] bg-white py-3 px-7 rounded-[250px] font-bold'>Shop Now</button>
        </div>
        </div>

        <div className='bg-[rgba(253,249,253,0.47)] rounded-2xl p-6 border border-white absolute top-[420px] left-[290px] '>
            <div>
                <img src="../../src/assets/banner.jpg" alt="thois is a pic" className='w-[800px] h-[420px] object-cover rounded-2xl'  />
            </div>

        </div>
       
    </div>
  )
}

export default Herobanner
