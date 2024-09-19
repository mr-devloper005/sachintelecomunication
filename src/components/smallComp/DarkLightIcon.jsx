// import React, { useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMoon,faLightbulb } from '@fortawesome/free-solid-svg-icons';


// function DarkLightIcon({
//   width="2.5rem",
//   height="2.5rem",
//   backgroundColor="white",
//   borderRadius="20px"
// }){

// let [isDark,setIsDark] = useState(true)

// let handleThemeMode = () => {
//   if (isDark) {
//     document.documentElement.classList.remove("dark");
//   } else {
//     document.documentElement.classList.add("dark");
//   }
//   setIsDark(prev => !prev);
// };


//   return (
//     <div style={{width,height,backgroundColor,borderRadius}} className='flex dark:text-yellow-400 justify-center items-center '>
//     <button onClick={handleThemeMode} className='w-10 h-10'>  {isDark?<FontAwesomeIcon icon={faLightbulb} />:<FontAwesomeIcon icon={faMoon} />}  </button>
//     </div>
//   )
// }

// export default DarkLightIcon



import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faLightbulb } from '@fortawesome/free-solid-svg-icons';

function DarkLightIcon({
  width = "2.5rem",
  height = "2.5rem",
  backgroundColor = "white",
  borderRadius = "20px"
}) {

  // Initialize state from localStorage or default to true (dark mode)
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : true;
  });

  // Apply theme mode when component mounts
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  // Handle theme toggle and save to localStorage
  const handleThemeMode = () => {
    setIsDark(prev => {
      const newTheme = !prev;
      localStorage.setItem('theme', JSON.stringify(newTheme));
      return newTheme;
    });
  };

  return (
    <div style={{ width, height, backgroundColor, borderRadius }} className='flex dark:text-yellow-400 justify-center items-center'>
      <button onClick={handleThemeMode} className='w-10 h-10'>
        {isDark ? <FontAwesomeIcon icon={faLightbulb} /> : <FontAwesomeIcon icon={faMoon} />}
      </button>
    </div>
  );
}

export default DarkLightIcon;
