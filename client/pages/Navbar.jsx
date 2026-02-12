import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='flex justify-between p-8'>
      <div>
        <h1 className='text-3xl'>INSTA<span className='text-[#CBCBCB]'>gram</span></h1>
      </div>
      <div className='flex gap-8 text-2xl'>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/upload">upload</Link>
        <Link to="/Contact">Contact US</Link>
      </div>
    </div>
  )
}

export default Navbar
