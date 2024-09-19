// import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShareNodes} from '@fortawesome/free-solid-svg-icons';


// function Share() {
//   return (
//     <div className='dark:text-black w-10 h-10 rounded-3xl flex justify-center items-center bg-white'>
//       <FontAwesomeIcon icon={faShareNodes} />
//     </div>
//   )
// }

// export default Share


import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';

function Share() {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Sachin Telecommunication',
          text: 'Check out this website!',
          url: window.location.href,  // Share the current URL
        });
        console.log('Website shared successfully!');
      } catch (error) {
        console.error('Error sharing the website:', error);
      }
    } else {
      alert('Sharing is not supported in your browser.');
    }
  };

  return (
    <div className='dark:text-black w-10 h-10 rounded-3xl flex justify-center items-center bg-white cursor-pointer' onClick={handleShare}>
      <FontAwesomeIcon icon={faShareNodes} />
    </div>
  );
}

export default Share;
