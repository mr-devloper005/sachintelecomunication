import React from 'react'

import ReusableComp from '../smallComp/ReusableComp'

function FuturePlans() {

let data =[
  {image:"future-growth-plan.webp",
    bgImage:"",
    description:"At Sachin Telecommunication, we are focused on expanding our reach and services. Our future plans include opening new stores, enhancing our online shopping experience, and introducing smartphone customization options. We aim to improve repair services, launch a customer loyalty program, and adopt eco-friendly practices to reduce our environmental impact. Our commitment is to continue growing while providing the best mobile solutions to our customers.",
    bgColor:"#173E4F"},

    {image:"expansion.png",
      bgImage:"",
      description:"New Store Expansion: Opening three new stores across Alwar District in the next five years to serve more customers.",
      bgColor:"#FCB826"},


      {image:"digital store.jpg",
        bgImage:"",
        description:"Enhanced Digital Storefront: Launching a new online shopping platform to increase online sales by 150% in two years, making shopping more convenient.",
        bgColor:"#0C2582"},
        
      {image:"loyalty-program.jpg",
        bgImage:"",
        description:"Customer Loyalty Program: Introducing a loyalty program to reward repeat purchases and referrals, aiming to enroll 20,000 customers in the first year.",
        bgColor:"#01C8CD"},


 {image:"advanceRepair.png",
            bgImage:"",
            description:"Advanced Repair Services: Offering on-site repair services by 2027 for quicker and more convenient customer care.",
            bgColor:"#2D3C50"},


        {image:"ecoFreindly.jpg",
          bgImage:"",
          description:"Eco-Friendly Initiatives: Implementing eco-friendly packaging and running our stores on solar power by 2030.",
          bgColor:"#488E14"},

]


  return (
    <div className='text-white min-h-screen'>
    {/* <SmallHeading prop={{h1:"Services ",p:"We pride ourselves on offering a complete mobile shopping experience:"}}/> */}
    
    {
      data.map(obj=>(
        <ReusableComp {...obj}/>
      ))
    }
  </div>
  )
}

export default FuturePlans
