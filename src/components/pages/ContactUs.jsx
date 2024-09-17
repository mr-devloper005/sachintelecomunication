import React from 'react'
import ReusableComp from '../smallComp/ReusableComp'
import ShopLocation from '../smallComp/ShopLocation'

function ContactUs() {

//   let obj={
//     bgImage:"./contact-us.jpg",
//     description:"Contact Us We’d love to hear from you! Here’s how you can get in touch:

// Visit Us: Sachin Telecommunication, Main Market, Alwar District.
// Call Us: +91-9876543210
// Email: support@sachintelecom.com
// Follow Us: [Facebook] | [Instagram] | [Twitter]
// Feel free to drop by our store or contact us online for any inquiries, product recommendations, or service bookings."
//   }
  return (
<>
<div className='min-h-screen w-full'>

  <h1 className='text-3xl font-extrabold text-center text-black bg-white dark:bg-zinc-900 dark:text-white'>Contact US</h1>
  <img src="./contact-us.jpg" className='w-full' alt="" />

  <div id="details" className='pt-10 flex gap-10 flex-col pl-3 pb-5' style={{backgroundImage:"url(cyanBg.png)"}}>
<div className='text-xl flex gap-3 font-extrabold'>Contact Us : <a href=" tel:+919784494374" className="text-blue-900 underline"> 9784494374 ,</a>  <a href=" tel:+919828153489" className="text-blue-900 underline hover:underline">9828153489</a></div>
<div className='text-xl flex gap-3 font-extrabold'>Email: support@sachintelecom.com
</div>

<div className='text-xl flex gap-3 font-extrabold'>Follow Us:[Facebook]|[Instagram]|[Twitter]
</div>

{/* <div className='text-lg flex gap-3 font-extrabold'>Feel free to drop by our store or contact us online for any inquiries, product recommendations, or service bookings.
</div> */}
  </div>

  <div id="adderss" className='bg-zinc-900 pt-10 pl-1 h-2/3 font-bold pb-5 text-white text-xl'>

    <h1>Visit Us: Sachin Telecommunication, Main Market, Alwar District.</h1>

<ShopLocation/>
    
  </div>
  
  </div>    
    </>
  )
}

export default ContactUs
