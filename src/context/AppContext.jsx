import React, { createContext,useState,useContext } from 'react'
const context = createContext()

export const useProductContext = ()=>{
    return useContext(context)
}

const AppContext = ({children}) => {
    const [product, setproduct] = useState([])
    const [cart, setcart] = useState([])
    const [wishlist, setwishlist] = useState([])
    const [category, setcategory] = useState([])

    const info = {
        product,
        setproduct,
        cart,
        setcart,
        wishlist,
        setwishlist,
        category,
        setcategory
    }
  return (
    <context.Provider value={info}>
      {children}
    </context.Provider>
  )
}

export default AppContext
