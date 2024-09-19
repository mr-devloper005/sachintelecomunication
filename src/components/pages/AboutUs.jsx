import React from 'react'
import { NavLink } from 'react-router-dom'
import ReusableComp from '../smallComp/ReusableComp'

function AboutUs() {
  return (
   <>
<div id='main' className='bg-white w-full min-h-0 dark:bg-black'>
  <div id="image" className='bg-black flex items-center justify-center py-5'>
    <img src="about-us.jpg" alt="" style={{width:'55%'}} className='rounded-3xl' />
  </div>

  <div className='h-3/4 inline-flex flex-col w-full py-11 pl-5 pr-10 font-bold  text-3xl' style={{backgroundImage:`url('./newPhoto.jpg')`, backgroundSize:'cover',height:'70%'}}>
    Welcome to, <span className='font-extrabold'>Sachin Telecommunication</span> the leading smartphone store in Alwar District. Established in 
     1990, we have been proudly serving our community for over 30 years. As the first and most trusted mobile store in the region. 
  </div>




  <div id="image" className='bg-black flex items-center justify-center py-5'>
    <img src="tech-phones.jpeg" alt="" style={{width:'55%' }} className='rounded-3xl' />
  </div>
  <div className=' text-black h-4/5 inline-flex flex-col  w-full py-8 pl-5 pr-10 font-extrabold mt-3 text-4xl' style={{backgroundImage:`url('./orange.jpg')`, backgroundSize:'cover',height:'40%'}}>
  We offer a wide range of the latest smartphones from top global brands like Apple, Samsung, Vivo, Oppo, Realme, and Xiaomi.
  <NavLink to={'/products'} className='pl-24 text-center '><span className='bg-blue-600 rounded-2xl p-4'>Products</span></NavLink>
  </div>



  <div id="image" className='bg-black flex items-center justify-center py-5'>
    <img src="commitment.jpg" alt="" style={{width:'55%' }} className='rounded-3xl' />
  </div>
  <div className='text-white sm:p-16 h-4/5 inline-flex flex-col   w-full py-8 pl-10 pr-10 font-extrabold mt-3 text-3xl' style={{backgroundImage:`url('./black-abstract.png')`, backgroundSize:'cover',height:'40%'}}>
  At Sachin Telecommunication, our commitment to quality, reliability, and exceptional customer service sets us apart.
  </div>
</div>



<div id="image" className='bg-black flex items-center justify-center py-5'>
    <img src="value.webp" alt="" style={{width:'55%' }} className='rounded-3xl' />
  </div>
  <div className='text-white h-4/5 inline-flex flex-col   w-full py-8 pl-10 pr-10 font-extrabold mt-3 text-3xl' style={{backgroundImage:`url('./blueBg.jpg')`, backgroundSize:'cover',height:'40%'}}>
  We believe in more than just selling smartphones  our mission is to build lasting relationships by offering personalized solutions that fit your needs. Whether you're seeking the latest flagship device or an affordable option, our knowledgeable team is always ready to help.
  </div>



   </>
  )
}

export default AboutUs




// import React from 'react'
// import { NavLink } from 'react-router-dom'

// function AboutUs() {
//   return (
//    <>
//     <div id='main' className='bg-white w-full min-h-screen overflow-x-hidden'>
//       <div id="image" className='bg-black flex items-center justify-center py-5'>
//         <img src="about-us.jpg" alt="" style={{width:'90%'}} className='rounded-3xl h-auto' />
//       </div>

//       <div className='h-auto inline-flex flex-col w-full py-11 px-5 font-bold text-2xl md:text-3xl' 
//            style={{backgroundImage:`url('./newPhoto.jpg')`, backgroundSize:'cover', backgroundPosition:'center'}}>
//         Welcome to, <span className='font-extrabold'>Sachin Telecommunication</span>, the leading smartphone store in Alwar District. Established in 1990, we have been proudly serving our community for over 30 years. As the first and most trusted mobile store in the region. 
//       </div>

//     </div>
//    </>
//   )
// }

// export default AboutUs
