import React, { useState, useEffect } from 'react';
import AdminPanel from './AdminPanel';
import { NavLink } from 'react-router-dom';

function AdminPass() {
  const password = "sachin555"; // Set your admin password
  const [passCheck, setPassCheck] = useState('');
  const [auth, setAuth] = useState(false);

  // Check local storage on component mount
  useEffect(() => {
    const checkAuth = localStorage.getItem('pass');
    if (checkAuth === 'true') {
      setAuth(true);
    }
  }, []);

  // Update local storage when auth changes
  useEffect(() => {
    localStorage.setItem('pass', auth);
  }, [auth]);

  // Handle password submission
  const passChecker = () => {
    if (passCheck === password) {
      setAuth(true);
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-white'>
      {auth ? (
        <div className='h-1/2 flex flex-col justify-center items-center'>
          <h1 className='text-2xl font-bold'>Welcome to the Admin Panel</h1>
          <NavLink to={'/admin'} className='w-44 p-5 mt-10 rounded-xl text-white  bg-blue-800'>Go to Admin Panel</NavLink>
        </div>
      ) : (
        <>
          <input
            onChange={(e) => setPassCheck(e.target.value)}
            className='h-10 w-52 rounded-xl'
            type="password" // Use password type for better security
            placeholder="Enter password"
          />
          <button
            className='w-32 p-5 rounded-xl text-white mt-3 bg-blue-800'
            onClick={passChecker} // Call passChecker on button click
          >
            Submit
          </button>
        </>
      )}
    </div>
  );
}

export default AdminPass;



// import React, { useState, useEffect } from 'react';

// function AdminPass() {
//   const password = "sachin555"; // Set your admin password
//   const [passCheck, setPassCheck] = useState('');
//   const [auth, setAuth] = useState(false);

//   // Check local storage on component mount
//   useEffect(() => {
//     const authCheck = localStorage.getItem('pass');
//     if (authCheck === 'true') { // Ensure it's a string comparison
//       setAuth(true);
//     }
//     console.log('Auth check:', authCheck); // Debugging line
//   }, []);

//   // Update local storage when auth changes
//   useEffect(() => {
//     localStorage.setItem('pass', auth);
//     console.log('Auth status set in localStorage:', auth); // Debugging line
//   }, [auth]);

//   // Handle password submission
//   const handleSubmit = () => {
//     if (passCheck === password) {
//       setAuth(true);
//       alert('Access granted!');
//     } else {
//       alert('Incorrect password. Please try again.');
//     }
//   };

//   return (
//     <div className='min-h-screen  flex flex-col justify-center items-center bg-white'>
//       {auth ? (
//         <div>
//           <h1 className='text-2xl font-bold'>Welcome to the Admin Panel</h1>
//           {/* Add admin panel content here */}
//         </div>
//       ) : (
//         <>
//           <input
//             onChange={(e) => setPassCheck(e.target.value)}
//             className='h-10 w-52 rounded-xl'
//             type="password" // Use password type for better security
//             placeholder="Enter password"
//           />
//           <button
//             className='w-32 p-5 rounded-xl text-white mt-3 bg-blue-800'
//             onClick={handleSubmit} // Call handleSubmit on button click
//           >
//             Submit
//           </button>
//         </>
//       )}
//     </div>
//   );
// }

// export default AdminPass;
