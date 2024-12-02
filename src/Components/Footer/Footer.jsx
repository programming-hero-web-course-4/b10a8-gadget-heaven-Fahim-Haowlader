import React from 'react'

const Footer = () => {
  return (
    <div className='py-24 px-[150px] bg-white'>
        <h3 className='text-4xl font-bold text-center'>Gadget Heaven</h3>
      <p className='text-center text-gray-500 text-xl mt-4 pb-10'>Leading the way in cutting-edge technology and innovation.</p>
      <hr  />
      <div className=' mt-10 flex gap-10 justify-between items-center'>
        <div className='flex flex-col justify-center items-center space-y-5'>
            <h1 className='text-xl font-bold '>Services</h1>
            <p>Product Support</p>
            <p>Order Tracking</p>
            <p>Shipping & Delivery</p>
        </div>
        <div className='flex flex-col justify-center items-center space-y-5'>
        <h1 className='text-xl font-bold '>Company</h1>
            <p>About Us</p>
            <p>Careers</p>
            <p>Contact</p>
        </div>
        <div className='flex flex-col justify-center items-center space-y-5'>
        <h1 className='text-xl font-bold '>Legal</h1>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
