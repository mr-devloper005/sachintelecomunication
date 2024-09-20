import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFile,faArrowTrendUp} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

function Pages({pText=""}) {
  return (
    <NavLink to={'/missions'} className='flex flex-col justify-center items-center w-1/5 h-full dark:text-slate-600'>
      <FontAwesomeIcon icon={faArrowTrendUp} />
      <p className='text-xs'>{pText && pText}</p>
    </NavLink >
  )
}

export default Pages




