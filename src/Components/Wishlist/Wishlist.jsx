import React from 'react'
import { useProductContext } from '../../context/AppContext'
import Wishitem from '../Wishitem/Wishitem'

const Wishlist = () => {
  const {wishlist} = useProductContext()
  return (
    <div className='px-32 py-16'>
    <h3 className='text-2xl font-bold py-3'>WishList</h3>   
    <div>
        {
          wishlist?.map((item) => (
            <Wishitem key={item?.product_id} item={item} />
            ))
        }
        
     </div> 
    
</div>
  )
}

export default Wishlist
