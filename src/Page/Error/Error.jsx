import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <Helmet>
          <title>Gadget Heaven - Error</title>
        </Helmet>
      <h1 className='text-[280px] font-bold text-[rgb(149,56,226)]' >Ooops!</h1>
      <p className='-mt-8 text-[50px] font-bold '>404 - PAGE NOT FOUND</p>
      <Link to="/home" className='mt-8 text-2xl py-4 px-6 bg-blue-500 text-white font-bold rounded-xl'>GO TO HOMEPAGE</Link>
    </div>
  )
}

export default Error
