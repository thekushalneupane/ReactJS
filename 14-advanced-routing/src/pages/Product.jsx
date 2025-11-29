import React from 'react'
import { Link, Outlet } from "react-router";


const Product = () => {
  return (
    <div className='flex gap-10 py-4 justify-center'>
      <Link to='/product/men'>Men</Link>
      <Link to='/product/women'>Women</Link>

      <Outlet/>
    </div>
    
  )
}

export default Product
