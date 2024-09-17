import React from 'react'

function SmallHeading({prop}) {
  return (
    <div className='h-32 w-full bg-white dark:bg-black text-black pl-5 pt-2 dark:text-white'>
      <h1 className='text-3xl font-bold'>{prop.h1}</h1>
      <p className='text-xl font-bold'>{prop.p}</p>
      
    </div>
  )
}

export default SmallHeading

