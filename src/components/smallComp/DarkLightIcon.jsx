import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon,faLightbulb } from '@fortawesome/free-solid-svg-icons';


function DarkLightIcon({
  width="2.5rem",
  height="2.5rem",
  backgroundColor="white",
  borderRadius="20px"
}){

let [isDark,setIsDark] = useState(false)

let handleThemeMode = () => {
  if (isDark) {
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.classList.add("dark");
  }
  setIsDark(prev => !prev);
};


  return (
    <div style={{width,height,backgroundColor,borderRadius}} className='flex dark:text-yellow-400 justify-center items-center '>
    <button onClick={handleThemeMode} className='w-10 h-10'>  {isDark?<FontAwesomeIcon icon={faLightbulb} />:<FontAwesomeIcon icon={faMoon} />}  </button>
    </div>
  )
}

export default DarkLightIcon

