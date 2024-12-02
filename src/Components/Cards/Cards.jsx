import React from 'react'
import Card from '../Card/Card'

const Cards = () => {
  return (
    <div className='flex '>
      <div className='w-[220px] h-[600px] py-4 flex flex-col mx-7 bg-white rounded-2xl pl-3 '>
      <button className='w-48 text-lg py-2 my-3  bg-[rgb(235,235,235)] rounded-[200px]'>All Products</button>
      <button className='w-48 text-lg py-2 my-3  bg-[rgb(235,235,235)] rounded-[200px]'>All Products</button>
      <button className='w-48 text-lg py-2 my-3  bg-[rgb(235,235,235)] rounded-[200px]'>All Products</button>
      <button className='w-48 text-lg py-2 my-3  bg-[rgb(235,235,235)] rounded-[200px]'>All Products</button>
      <button className='w-48 text-lg py-2 my-3  bg-[rgb(235,235,235)] rounded-[200px]'>All Products</button>
      <button className='w-48 text-lg py-2 my-3  bg-[rgb(235,235,235)] rounded-[200px]'>All Products</button>
      <button className='w-48 text-lg py-2 my-3  bg-[rgb(235,235,235)] rounded-[200px]'>All Products</button>
      </div>
      <div>

      <div className='grid grid-cols-3 gap-5 auto-rows-[335x]'>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </div>

      </div>
    </div>
  )
}

export default Cards
