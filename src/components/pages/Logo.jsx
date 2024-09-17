import React, { useState, useEffect } from 'react';

function Logo() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Function to check if the 'dark' class is present on the HTML or body
    const checkDarkMode = () => {
      return document.documentElement.classList.contains('dark');
    };

    // Initial check on mount
    setIsDarkMode(checkDarkMode());

    // Monitor changes in the 'dark' class manually
    const observer = new MutationObserver(() => {
      setIsDarkMode(checkDarkMode());
    });

    // Observe changes to the class list of the <html> element
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    // Cleanup the observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className='dark:text-white w-3/4 pt-2 pl-3  text-xl font-bold'>
      <img
        src={isDarkMode ? "logo-2.png" : "logo8.png"} // Dark mode logo if dark, else normal logo
        className='w-20 sm:pt-3 h-20'
        alt="Logo"
      />
    </div>
  );
}

export default Logo;
