import React from 'react'
import Header from '../../Components/Header/Header'
import { FiShoppingCart } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";

const PrroductPage = () => {
  return (
    <div>
        <Header></Header>
        <div>
            <div className='bg-[rgb(149,56,226)] text-white pt-9 pb-[280px] relative'>
                <h1 className='text-4xl font-bold text-center pb-9 '>Product Page</h1>
                <p className='text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to </p>
                <p className='text-center'>the coolest accessories, we have it all!</p>
            </div>
            <div className='p-5 rounded-xl flex gap-5 w-[1150px] bg-white absolute top-[300px] right-[150px] border border-[rgb(149,56,226)]'>
                <div> <img src="../../src/assets/banner.jpg" alt="" className='h-[490px] w-[400px] object-cover rounded-xl' /></div>
                <div className='space-y-4'>
                    <h2 className='text-3xl font-bold'> Samsung Galaxy S23 Ultra</h2>
                    <h3 className='text-2xl font-semibold '>Price: $ 999.99</h3>
                    <p className='bg-[rgba(48,156,8,.1)] border border-[rgb(48,156,8,.1)] text-center rounded-3xl p-2 w-32 '>In Stock</p>
                    <p>Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge display.</p>
                    <h4 className='text-xl font-semibold'>Specification:</h4>
                    <p> 1.Intel i7 11th Gen </p>
                     <p>2.16GB RAM </p>
                     <p>3.512GB SSD   </p>
                     <p>4.Touchscreen</p>
                     <h5 className='font-semibold'>Rating : 3</h5>
                     <div className='flex gap-5 text-white'>
                        <div className=''>
                        <button className='flex gap-3 bg-[rgb(149,56,226)] py-3 px-5 font-semibold rounded-3xl items-center'> add to Card <div className='text-2xl'><FiShoppingCart/></div> </button>
                            </div>
                        <button className=' flex justify-center items-center text-black text-3xl w-12 h-12 rounded-[50%] border border-black'><IoMdHeartEmpty/></button>
                     </div>
                </div>
            </div>
            <div className='h-80'>

            </div>
        </div>
       
    </div>
  )
}

export default PrroductPage
