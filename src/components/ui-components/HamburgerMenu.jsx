import React from 'react';
import { NavLink } from 'react-router-dom';

function HamburgerMenu({ isOpen, toggleMenu }) {
  // Function to close menu if clicked outside
  const closeMenu = (e) => {
    if (e.target.classList.contains('menu-overlay')) {
      toggleMenu(false); // Close the menu
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 menu-overlay"
          onClick={closeMenu} // Click outside to close
        >
          <div className="w-64 bg-gray-300 dark:bg-black fixed top-0  right-0 h-full shadow-lg">
            {/* Close button */}
            {/* <button
              className="text-black dark:text-white p-4"
              onClick={() => toggleMenu(false)} // Button to close
            >
              X
            </button> */}
            
            {/* Menu Links */}
            <nav className="flex flex-col py-8 px-5 font-bold space-y-4">
              <NavLink onClick={()=>{toggleMenu(prev=>!prev)}} to="/" className="text-black dark:text-white bg-white  dark:bg-zinc-900 h-12 w-full rounded-xl flex justify-center items-center">
                Home
              </NavLink>
              <NavLink onClick={()=>{toggleMenu(prev=>!prev)}} to="/services" className="text-black dark:text-white bg-white  dark:bg-zinc-900 h-12 w-full rounded-xl flex justify-center items-center">
                Services
              </NavLink>
              <NavLink onClick={()=>{toggleMenu(prev=>!prev)}} to="/products" className="text-black dark:text-white bg-white  dark:bg-zinc-900 h-12 w-full rounded-xl flex justify-center items-center">
                Mobile Stock
              </NavLink>
              <NavLink onClick={()=>{toggleMenu(prev=>!prev)}} to="/aboutus" className="text-black dark:text-white bg-white  dark:bg-zinc-900 h-12 w-full rounded-xl flex justify-center items-center">
                About Us
              </NavLink>
              <NavLink onClick={()=>{toggleMenu(prev=>!prev)}} to="/futureplans" className="text-black dark:text-white bg-white  dark:bg-zinc-900 h-12 w-full rounded-xl flex justify-center items-center">
                Future Plans
              </NavLink>
              <NavLink onClick={()=>{toggleMenu(prev=>!prev)}} to="/contactus" className="text-black dark:text-white bg-white  dark:bg-zinc-900 h-12 w-full rounded-xl flex justify-center items-center">
                Contact Us
              </NavLink>
              <NavLink onClick={()=>{toggleMenu(prev=>!prev)}} to="/seeposts" className="text-black dark:text-white bg-white  dark:bg-zinc-900 h-12 w-full rounded-xl flex justify-center items-center">
                See Posts
              </NavLink>

              <NavLink onClick={()=>{toggleMenu(prev=>!prev)}} to="/contactus" className="text-black dark:text-white bg-white  dark:bg-zinc-900 h-12 w-full rounded-xl flex justify-center items-center">
                Contact Us
              </NavLink>
              <NavLink onClick={()=>{toggleMenu(prev=>!prev)}} to="/adminpass" className="text-black dark:text-white bg-white  dark:bg-zinc-900 h-12 w-full rounded-xl flex justify-center items-center">
                Admin
              </NavLink>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default HamburgerMenu;
