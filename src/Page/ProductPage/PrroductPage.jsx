import React, { useEffect } from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { useParams } from 'react-router-dom';
import { useProductContext } from '../../context/AppContext';

const PrroductPage = () => {
    const {id} = useParams();
    const {product,cart,setcart} = useProductContext()
   const details = product?.find(element => element?.product_id === id)
   const handleAddToCart =(product)=>{

        setcart([...cart,product])
        console.log(product)
        console.log(cart)
      } 
  
   
  return (
    <div>
        <div>
            <div className='bg-[rgb(149,56,226)] text-white pt-9 pb-[280px] relative'>
                <h1 className='text-4xl font-bold text-center pb-9 '>Product Page</h1>
                <p className='text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to </p>
                <p className='text-center'>the coolest accessories, we have it all!</p>
            </div>
            <div className='p-5 rounded-xl flex gap-5 w-[1150px] bg-white absolute top-[300px] right-[150px] border border-[rgb(149,56,226)]'>
                <div> <img src={details?.product_image} alt="" className='h-[520px] w-[430px] object-cover rounded-xl' /></div>
                <div className='space-y-4'>
                    <h2 className='text-3xl font-bold'> {details?.product_title}</h2>
                    <h3 className='text-2xl font-semibold '>Price: ${details?.price} </h3>
                    <p className='bg-[rgba(48,156,8,.1)] border border-[rgb(48,156,8,.1)] text-center rounded-3xl p-2 w-32 '>{details?.availability ? "In Stock" : "Out OF Stock"}</p>
                    <pre className='w-[600px] text-wrap '>{details?.description} </pre>
                    <h4 className='text-xl font-semibold'>Specification:</h4>
                    {
                        details?.Specification?.map((element, index) => (
                            <div key={index}>
                                <p> {element}</p>
                                </div>
                                ))
                    }
                    {/* <p> 1.Intel i7 11th Gen </p> */}
                     {/* <p>2.16GB RAM </p>
                     <p>3.512GB SSD   </p>
                     <p>4.Touchscreen</p> */}
                     <h5 className='font-semibold'>Rating : {details?.rating}</h5>
                     <div className='flex gap-5 text-white'>
                        <div  onClick={()=>handleAddToCart(details)} className=''>
                        <button className='flex gap-3 bg-[rgb(149,56,226)] py-3 px-5 font-semibold rounded-3xl items-center'> add to Card <div className='text-2xl'><FiShoppingCart/></div> </button>
                            </div>
                        <button className=' flex justify-center items-center text-black text-3xl w-12 h-12 rounded-[50%] border border-black'><IoMdHeartEmpty/></button>
                     </div>
                </div>
            </div>
            <div className='h-[400px]'>

            </div>
        </div>
       
    </div>
  )
}

export default PrroductPage
