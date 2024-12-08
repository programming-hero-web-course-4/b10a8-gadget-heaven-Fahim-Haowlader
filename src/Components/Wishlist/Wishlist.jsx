import React from 'react'
import Cartitem from '../Cartitem/Cartitem'

const Wishlist = () => {
  return (
    <div className='px-32 py-16'>
    <h3 className='text-2xl font-bold py-3'>WishList</h3>   
    <div>
        <Cartitem/>
        <Cartitem/>
        <Cartitem/>
     </div> 
    
</div>
  )
}

export default Wishlist
