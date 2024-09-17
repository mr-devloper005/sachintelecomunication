import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

function HomeIcon({pText=""}) {
  return (
    <div className='flex relative flex-col justify-center items-center w-1/5 h-full dark:text-slate-600'>
      <div className='absolute bottom-8 font-extrabold w-12 h-12 rounded-3xl bg-blue-700 text-white flex justify-center items-center'><NavLink to={"/"}><FontAwesomeIcon  icon={faHouse} /></NavLink></div>
      <p className='mt-4 text-xs'>{pText && pText}</p>
    </div>
  )
}

export default HomeIcon
