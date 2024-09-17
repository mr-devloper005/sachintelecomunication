import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faXTwitter } from '@fortawesome/free-brands-svg-icons';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import Share from '../smallComp/Share';

function Footer() {
  return (
    <div className='w-full  p-1 h-56 mt-4 sm:h-1/5 sm:mt-5 sm:p-3 '>
<div className='text-black dark:text-white w-full h-full dark:bg-zinc-900 bg-white rounded-xl p-3 flex justify-center items-center flex-col'>
 <h1 className='  text-2xl font-bold'>Sachin Telecommunication</h1>
      <p className=' font-bold  mt-2'>Sachin Telecommunication provides quality mobile phones and accessories, committed to enhancing your connectivity and communication."</p>
      <div id='social-media-icons'></div>
      <div className='text-3xl flex gap-5 mt-5'>
      <p><FontAwesomeIcon icon={faFacebook} /></p>
      <p><FontAwesomeIcon icon={faXTwitter} /></p>
      <a href=" tel:+919828153489" className=" underline hover:underline"><FontAwesomeIcon icon={faPhone} /></a>
      <div><Share/></div>
      </div>

</div>
    </div>
  )
}

export default Footer



