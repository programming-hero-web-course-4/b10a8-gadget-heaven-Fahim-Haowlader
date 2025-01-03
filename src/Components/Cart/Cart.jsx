import React, { useEffect,useState } from 'react'
import Cartitem from '../Cartitem/Cartitem'
import { useProductContext } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'



const Cart = () => {
  const navigate = useNavigate()
  const {cart,setcart} = useProductContext()
  //  const [balance, setbalance] = useState([])
   const [total, settotal] = useState(0)
 useEffect(()=>{
  const balance = cart.map((item)=> item?.price)
  const total1 = balance.reduce((current,newone)=>{
    return current + newone
  },0)
  settotal(total1)
 })
      

 const handlePurshes = ()=>{
  setcart([])
  settotal(0)
  Swal.fire({
    position: "center-center",
    icon: "success",
    title: "Payment Successfully",
    text: `Thanks for purchasing . Total : ${total}`,
    showConfirmButton: true,
  
  });
  navigate('/home')

 }

    
    
    
  
  return (
    <div className='px-32 py-16'>
      <div className='flex justify-between items-center pb-3'>
        <div className=''><h1 className='text-2xl font-bold'>Cart</h1></div>
        <div className='flex gap-5 justify-center items-center'>
            <p className='text-2xl font-bold'>Total Cost : {total} </p>
            <button className=' border text-xl py-2 px-5 rounded-3xl font-semibold  border-[rgb(149,56,226)]  text-[rgb(149,56,226)] hover:text-white hover:bg-[rgb(149,56,226)]'>Short by price</button><button onClick={handlePurshes} className=' border text-xl py-2 px-5 rounded-3xl font-semibold  border-[rgb(149,56,226)] text-[rgb(149,56,226)]  hover:text-white hover:bg-[rgb(149,56,226)]'>Purchase</button>

        </div>
      </div>

        {
          cart.map(item => <Cartitem key={item.product_id} item={item}></Cartitem>)
        }

    </div>
  )
}

export default Cart
