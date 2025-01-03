import React from 'react'
import { TiDeleteOutline } from "react-icons/ti";
import { useProductContext } from '../../context/AppContext';
import { toast } from 'react-toastify';



const Cartitem = ({item}) => {
  const {cart,setcart} = useProductContext();
  const handleDelet = (id) =>{
    const newcart = cart.filter((item) => item.product_id !== id);
    setcart(newcart);
     toast.warn('Remove From The Cart', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
  }
  return (
    <div>
      <div className=' bg-white flex my-5 gap-10 rounded-xl justify-between items-center p-6'>
        <div><img src={item?.product_image} alt="image of the product" className='w-[200px] h-[140px] object-contain rounded-xl '  /></div>
        <div className='space-y-2'>
          <h3 className='text-2xl font-bold pb-2'>{item?.product_title}</h3>
          <p className='text-lg w-[800px] text-wrap text-gray-500 pb-2'>{item?.description} </p>
          <h4 className='text-xl font-bold'>Price : $ {item?.price} </h4>
        </div>
        <div onClick={()=>handleDelet(item?.product_id)} className='w-[150px] flex justify-center items-center'>
          <h3  className='text-6xl text-red-500 '><TiDeleteOutline /></h3>
        </div>
      </div>
    </div>
  )
}

export default Cartitem
