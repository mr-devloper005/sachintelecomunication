import React from 'react'
import Features from '../smallComp/Features'
import Pages from '../smallComp/Pages'
import HomeIcon from '../smallComp/HomeIcon'
import Projects from '../smallComp/Projects'
import Bars from '../smallComp/Bars'

function NavigationBar() {

  let barStyles ={
    width:'w-1/5',
    darkBg:"text-slate-600",
    pText:"Menu"
  }
  return (
    <div className='bg-white bg-opacity-90 w-full sticky  h-14 border-y-2 dark:bg-zinc-950  flex justify-evenly items-center  bottom-0 border-gray-500' >
      <Features pText="Products"/>
      <Pages pText="pages"/>
      <HomeIcon pText="Home"/>
      <Projects pText="Posts"/>
      <Bars {...barStyles} />
    </div>
  )
}

export default NavigationBar



