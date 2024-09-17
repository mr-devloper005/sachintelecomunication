import React from 'react'

function ReusableComp({image,bgImage,description,bgColor}) {
  return (
   <>
      <div id="image" className='bg-black flex  items-center justify-center py-5'>
    <img src={image} alt=""  className='rounded-3xl w-95p sm:w-1/2 md:w-2/3' />
  </div>
  <div className='text-white h-4/5 tracking-wide  inline-flex flex-col   w-full py-8 pl-10 pr-10 font-extrabold mt-3 sm:px-40  text-3xl' style={{
    
      background: bgColor ? bgColor : `url('./blueBg.jpg')`, backgroundSize:'cover',height:'40%'}}>
 {description}
  </div>
    </>
  )
}

export default ReusableComp



