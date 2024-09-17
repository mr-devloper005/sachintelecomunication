import React from 'react';

function ShopLocation() {

  let shopCoordinates = "27.565879329914747, 76.60038120785187"

  return (
    <div className='p-5'>
      <h2>Our Location</h2>
      <iframe className='rounded-xl border-none'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221.05939306265194!2d76.60022027531411!3d27.564053223624303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397299e11e8200fd%3A0x4997f2e6d6504c0c!2sSachin%20telecommunications!5e0!3m2!1sen!2sin!4v1725981748564!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Shop Location"
      ></iframe>

      {/* <div className="mt-4">
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${shopCoordinates}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Get Directions
        </a>
      </div> */}
    </div>
  );
}

export default ShopLocation;




