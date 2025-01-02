import React from 'react'
import { useNavigate } from 'react-router-dom'

const OfferPage = () => {
    const navigate = useNavigate()
  return (
    <div>
        <div className='bg-[rgb(149,56,226)] flex flex-col justify-center items-center  '>

        <h1 className='text-5xl font-bold text-center text-white py-3'>Best Offers Of The Year </h1>
        <p className='py-3 pb-10 w-[1000px] text-normal text-white text-center'>Welcome to our exclusive offer page, where the best deals await you! Don’t miss out on the opportunity to snag incredible discounts and special promotions that will make your shopping experience unforgettable . </p>
        </div>
     <div className='flex m-5 rounded-3xl my-10'>
        <div>
            <img src="https://cbx-prod.b-cdn.net/COLOURBOX36130925.jpg?width=800&height=800&quality=70" alt="" className='w-[1100px]' />
        </div>
        <div className='bg-white w-full'>
        <h1 className='text-center text-5xl text-[rgb(149,56,226)] pt-16 font-semibold'>UPTO 50% Discount</h1>
        <p className='text-center pt-3'>On Every Product of Gedget Heaven</p>
        <p className='text-center pt-3'>From : 31/12/2024 - To : 10/01/2025</p>
        <p onClick={()=> navigate('/home')}  className='text-center mt-3 py-2 mx-auto border w-32 border-[rgb(149,56,226)] text-[rgb(149,56,226)] font-bold hover:text-white hover:bg-[rgb(149,56,226)] rounded-lg' >Shop Now</p>
        </div>
     </div>
     <div className='flex m-5 rounded-3xl my-10'>
        <div>
            <img src="https://media.istockphoto.com/id/1435116123/vector/black-friday-sale-sticker.jpg?s=612x612&w=0&k=20&c=saGZb65HJJCqPC5n-io9WunHyd-VNc1tvjdDvuI5PT0=" alt="" className='w-[1100px]' />
        </div>
        <div className='bg-white w-full'>
        <h1 className='text-center text-5xl text-[rgb(149,56,226)] pt-24 font-semibold'>UPTO 30% Discount</h1>
        <p className='text-center pt-3'>On Every Mobile of Gedget Heaven</p>
        <p className='text-center pt-3'>From : 20/12/2024 - To : 27/12/2024</p>
        <p onClick={()=> navigate('/home')} className='text-center mt-3 py-2 mx-auto border w-32 border-[rgb(149,56,226)] text-[rgb(149,56,226)] font-bold hover:text-white hover:bg-[rgb(149,56,226)] rounded-lg' >Shop Now</p>
        </div>
     </div>
    </div>
  )
}

export default OfferPage
