import React from 'react'
import {Link, useNavigate} from 'react-router'

const Navbar = () => {

  //return to homepage by clicking the logo
  
  const navigate = useNavigate();

  const btnClicked =() =>{
    navigate('/')
  }

  return (
    <div className='flex items-center justify-between px-10 py-5 bg-amber-900'>
      <h2 onClick={()=>{
        btnClicked();
      }} className='font-semibold text-3xl italic cursor-pointer '>Cliffs</h2>
      <div className='flex gap-10 text-lg'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/product'>Product</Link>
      </div>
    </div>
  )
}

export default Navbar
