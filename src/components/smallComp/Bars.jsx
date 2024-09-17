import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';



function Bars({width="w-10",bg="none",darkBg = "text-white",pText=""}) {
  return (
   <NavLink to={'/'} className={` dark:${darkBg} ${width} h-10 rounded-3xl flex-col flex justify-center items-center ${bg}`}> 
      <FontAwesomeIcon  icon={faBars} />
      <p className='text-xs'>{pText && pText}</p>
    </NavLink>
  )
}

export default Bars




