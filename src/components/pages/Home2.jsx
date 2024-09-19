import React from 'react'
import Logo from './Logo'
import Share from '../smallComp/Share'
import DarkLightIcon from '../smallComp/DarkLightIcon'
import Bars from '../smallComp/Bars'
import CardSlider from '../ui-components/CardSlider'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';
import BigComp from '../smallComp/BigComp'
import Footer from '../ui-components/Footer'

function Home2({menu}) {
let barProps = {
  bg:"bg-white",
  darkBg:'text-black',
  toggleMenu:menu
}

let array=[
  {
  smallHeading:"Bright vission",
   Heading:"Vission",
   description:" We have set ambitious goals to expand our reach, enhance our services, and continue being the leading mobile technology provider in Alwar District.",
   link:"/missions",
   imageLink:"success.webp"
 
 },{
 smallHeading:"Best Service",
  Heading:"Services",
  description:"We provide the best service in all of Alwar.",
  link:"/futureplans",
  imageLink:"services.png"

},

 {
  smallHeading:"Our Product Range",
   Heading:"Products",
   description:"We provide a comprehensive range of products, starting with mobile phones and extending to all related accessories.",
   link:"/admin",
   imageLink:"apple.webp"
 
 }]


  return (
 <div id="main" className='min-h-screen pb-10 flex flex-col gap-3'>

<div id="Top-bar" className='flex h-14 max-w-1/2 justify-between px-3 gap-2  mt-3 items-center '> 
   <Logo/> <div className='flex gap-5 mr-3'> <Share/> <DarkLightIcon/> <Bars {...barProps} /> </div></div>


<div id="cards"><CardSlider/></div>

<div id='star-div' className='relative flex h-40 w-full mt-6 justify-center px-3 items-center' >
  <div className='w-full h-full rounded-xl p-3 bg-white dark:bg-zinc-900'>
    <p className='text-blue-600 font-bold'>A complete Solution</p>
    <p className='text-3xl text-black dark:text-white font-bold'>Sachin Telecommunication</p>
    <p className='text-gray-400 mt-1 font-bold'>One Place To Fulfill All Tech Needs.</p>
    <p className='text-yellow-500 absolute right-6 top-2 text-2xl'><FontAwesomeIcon  icon={faStar}/></p>
  </div></div>

<div id="3-divs" className='mt-6 flex flex-col justify-evenly bg-white dark:bg-zinc-900' style={{width:'96%',borderTopRightRadius:"10px",borderBottomRightRadius:"10px",height:"700px"}}>


{array.map(obj=>(
  <BigComp key={Math.random()} {...obj}/>
))}


</div>


<div id="small-card" className='w-full h-36 flex justify-between px-4 mt-5'>

  <div className='w-1/3 h-full bg-white text-black flex justify-evenly items-center flex-col p-2  dark:text-white dark:bg-zinc-900 rounded-lg' style={{width:"47%"}}>
 {/* <p>Ready</p> */}
 <p>Alwar's most Established and respected smartphone store.</p>
  </div>

  <div className='w-1/3 h-full bg-white text-black flex justify-evenly items-center flex-col p-2  dark:text-white dark:bg-zinc-900 rounded-lg' style={{width:"47%"}}>
 <p>We will help you to find the perfect Smartphone.</p>
  </div>
</div>


<Footer/>
 </div>
  )
}

export default Home2


