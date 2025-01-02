import React, { useEffect,useState } from 'react'
import Card from '../Card/Card'
import { useProductContext } from '../../context/AppContext'

const Cards = () => {
  const {product ,setproduct,category,setcategory} = useProductContext()
  const [showingProducts ,setshowingProduct] = useState([])
  useEffect(()=>{
    fetch('product.json')
    .then(res => res.json())
    .then(data =>{
      console.log(data)
      setproduct(data)
      setshowingProduct(data)
      
     
      
        
    })
    },[])

    useEffect(()=>{
      product?.forEach(element => {
        if (!category.includes(element?.category)){
          setcategory([...category,element?.category])
        }
      }
    )
    
    })
 const handleAllClick = () =>{
  setshowingProduct(product)
 }
    const handleCategoryClick = (category) =>{
      console.log("click,",category)
       const newProduct =  product.filter((item) => item.category === category)
       console.log(newProduct)
       setshowingProduct(newProduct)
      
    }
  return (
    <div className='flex '>
      
      {/* {
        product.forEach(element => {
          if (!category.includes(element?.category)){
            setcategory([...category,element?.category])
          }
        }
        )} */}
      <div className='w-[220px] h-[780px] py-4 flex flex-col mx-7  bg-white rounded-2xl pl-3 '>
      <button onClick={handleAllClick} className='w-48 text-lg py-2  my-3  bg-[rgb(235,235,235)] hover:bg-[rgb(149,56,226)] rounded-[200px]'>All Products</button>
     {
        category?.map((item,index)=>{
          return(
            <div key={index}>
              <button onClick={()=>handleCategoryClick(item)} className='w-48 text-lg py-2 my-3  bg-[rgb(235,235,235)] hover:bg-[rgb(149,56,226)] rounded-[200px]'>{item}</button>
              </div>
          )      
        })
      }
      </div>
      <div>

      <div className='grid grid-cols-3 gap-5 auto-rows-[400px]'>
        {showingProducts?.map((item) => (
          <Card key={item?.product_id} item={item} />
        ))}
    </div>

      </div>
    </div>
  )
}

export default Cards
