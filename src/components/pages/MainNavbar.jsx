import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHandsHelping } from '@fortawesome/free-solid-svg-icons';



function MainNavbar() {
  
  let [toggleState,setToggleState] = useState(false)

  let handelToggle = ()=>{
    setToggleState(!toggleState)

    console.log("hello")
  }


  return (
    <div className={`w-full ${toggleState? "mt-3":"mt-1"} bottom-3 absolute ${toggleState? "h-1/3":"h-1/6"}  flex justify-center items-center h-20`}>
{
  toggleState?
    <div className=' h-full flex-wrap p-4 gap-3 rounded-xl text-3xl flex  items-center justify-around font-extrabold  tracking-wide' style={{width:'97%',backgroundColor:"#F95D2D"}}>
      <NavLink>
       About US
      </NavLink>

      <NavLink>
        Products
      </NavLink>     
     
          <NavLink>
        Posts
      </NavLink>
        <NavLink>
        About-Us
      </NavLink>  

      <NavLink>
        Future Plans
      </NavLink>

      <NavLink>
        Faqs
      </NavLink>     
       <NavLink>
        User-Reviews
      </NavLink>  
          <NavLink>
        Contact-Us
      </NavLink>

     <p className='rotate-90'><FontAwesomeIcon  onClick={handelToggle} icon={faBars} /></p></div>
  :<div className=' h-5/6 bg-teal-700  rounded-xl text-2xl flex  items-center justify-around font-extrabold  tracking-wide' style={{width:'97%',backgroundColor:"#F95D2D"}}>
    <NavLink to={"/aboutus"}>
        About Us
      </NavLink>

      <NavLink>
        Products
      </NavLink>     
        
          <NavLink>
        Posts
      </NavLink>
     <FontAwesomeIcon className='active:scale-95' onClick={handelToggle} icon={faBars} /></div>
}   
      </div>
  )
}

export default MainNavbar

