import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLayerGroup} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';


function Features({pText=""}) {
  return (
    <NavLink to={'./products'} className='flex flex-col justify-center items-center w-1/5 h-full dark:text-slate-600'>
      <FontAwesomeIcon icon={faLayerGroup} />
      <p className='text-xs'>{pText && pText}</p>
    </NavLink>
  )
}

export default Features
