import React, { useEffect,useState } from 'react'
import Cartitem from '../Cartitem/Cartitem'
import { useProductContext } from '../../context/AppContext'

const Cart = () => {
  const {cart,setcart} = useProductContext()
   const [balance, setbalance] = useState([])
   const [total, settotal] = useState(0)
 useEffect(()=>{
  const newBalance = cart.map((item)=> item?.price)
  setbalance(newBalance)
  const total1 = balance.reduce((current,newone)=>{
    return current + newone
  },0)
  settotal(total1)
 },[cart])
      

    
    
    
  
  return (
    <div className='px-32 py-16'>
      <div className='flex justify-between items-center pb-3'>
        <div className=''><h1 className='text-2xl font-bold'>Cart</h1></div>
        <div className='flex gap-5 justify-center items-center'>
            <p className='text-2xl font-bold'>Total Cost : {total} </p>
            <button className=' border text-xl py-2 px-5 rounded-3xl font-semibold  border-[rgb(149,56,226)] text-[rgb(149,56,226)]'>Short by price</button><button className=' border text-xl py-2 px-5 rounded-3xl font-semibold  border-[rgb(149,56,226)] text-[rgb(149,56,226)]'>Purchase</button>

        </div>
      </div>

        {
          cart.map(item => <Cartitem key={item.product_id} item={item}></Cartitem>)
        }

    </div>
  )
}

export default Cart
