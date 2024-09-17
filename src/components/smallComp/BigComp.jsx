import React from 'react'
import { NavLink } from 'react-router-dom'

function BigComp({h="h-1/3",
  imageLink,
  smallHeading,
  Heading,
  description,
  link
  }) {
  return (
    <div  className={`w-full  flex justify-center items-center  gap-10`} >
      <img src={imageLink} alt="" className='h-36 w-1/3 sm:w-64'/>
      <div className='w-2/3'>
      <p className='text-blue-600 pl-2'>{smallHeading}</p>
    <p className='text-2xl font-extrabold text-black dark:text-white'>{Heading}</p>
    <p className='text-gray-400 mt-4'>{description}</p>
        <NavLink to={link}><button className={"bg-blue-600 text-white w-20 rounded-lg h-9"}>View All</button></NavLink>
      </div>
      
    </div>
  )
}

export default BigComp
