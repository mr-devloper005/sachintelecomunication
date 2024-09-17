import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes} from '@fortawesome/free-solid-svg-icons';


function Share() {
  return (
    <div className='dark:text-black w-10 h-10 rounded-3xl flex justify-center items-center bg-white'>
      <FontAwesomeIcon icon={faShareNodes} />
    </div>
  )
}

export default Share
