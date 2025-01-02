import React from 'react'
import { useNavigate } from 'react-router-dom'
import PrroductPage from '../../Page/ProductPage/PrroductPage'

const Card = ({item}) => {
  const nevigate = useNavigate()
  const handleClick = (id)=>{
    nevigate(`/details/${id}`)
  
  }
  return (
    <div className='w-[285px] h-[390px] relative  bg-white rounded-2xl p-5 '>
     <img src={item?.product_image} alt="this is image" className=' w-[285px] rounded-2xl mb-5 h-40 object-contain ' />
     <h3 className='text-2xl font-semibold mb-3'>{item?.product_title}</h3>
     <p className='text-xl mb-3'>{item?.price}</p>
     <button onClick={()=> handleClick(item?.product_id)} className='text-xl absolute bottom-2 border text-[rgb(149,56,226)] border-[rgb(149,56,226)] px-5 py-3 rounded-[200px] mb-4'>View Details</button>
    </div>
  )
}

export default Card
