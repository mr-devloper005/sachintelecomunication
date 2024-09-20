import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faImage,faFilm} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';


function Projects({pText=""}) {
  return (
    <NavLink to={'/seeposts'} className='flex flex-col justify-center items-center w-1/5 h-full dark:text-slate-600'>
      <FontAwesomeIcon icon={faFilm} />
      <p className='text-xs'>{pText && pText}</p>
    </NavLink>
  )
}

export default Projects
