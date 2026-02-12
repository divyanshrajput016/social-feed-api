import React from 'react'
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from '../pages/Home';
import Navbar from '../pages/Navbar';
import Posts from '../pages/Posts';
import Upload from '../pages/Upload';


const App = () => {
  return (
    <div className='bg-[#F2F2F2] h-max'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/posts" element={<Posts/>}/>
        <Route path="/upload" element={<Upload/>} />
      </Routes>
    </div>
  )
}

export default App
