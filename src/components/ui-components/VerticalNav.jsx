import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

function VerticalNav() {
  return (
  <>  <div className='h-full w-1/3 sm:w-1/12  text-white flex flex-col items-center py-10 gap-5 font-bold cursor-pointer'>
      <NavLink  to={"/services"}>Services</NavLink>
      <NavLink to={"/aboutus"}>AboutUs</NavLink>
      <NavLink to={"/uploadPost"}>upload post</NavLink>
      <NavLink to={"/seePost"}>See post</NavLink>
      <NavLink to={"/MobileStock"}>Mobile Stock</NavLink>
      <NavLink to={"/CurrentStock"}>CurrentStock</NavLink>
      
      <Outlet/>
    </div>
    

    </>
  )
}

export default VerticalNav


