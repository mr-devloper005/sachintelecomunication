import React from 'react'
import ReusableComp from '../smallComp/ReusableComp'
import SmallHeading from '../smallComp/SmallHeading'

function Services() {

  let array=[
    {image:"ourService.jpg",
      bgImage:"",
      description:" Sachin Telecommunication offers a full range of services to meet your mobile needs. From the latest smartphones and flexible financing options to expert repair services and quality accessories, we ensure a complete and satisfying experience. As a Jio Mart Digital franchisee, we also provide convenient digital shopping solutions. Our commitment is to deliver exceptional service and value every step of the way.",
    bgColor:"#37D4FF"
    },

      {image:"bestSmartphones.png",
        bgImage:"",
        description:"Smartphone Sales: We stock the latest smartphones from brands like Apple, Samsung, Vivo, Oppo, Realme, and Xiaomi. Whether you're looking for a flagship or a budget-friendly model, we’ve got it."
     ,
    bgColor:"#012B2A"
      },


        {image:"financing-options.jpg",
          bgImage:"",
          description:"Flexible Financing: Easy EMI options available through HDB Finance and Bajaj Finserv, so you can buy your dream phone without the stress of upfront costs.",
          bgColor:"#314B88"},
          
        {image:"mobileRepair.jpg",
          bgImage:"",
          description:"Expert Repair Services: Our technicians are skilled in everything from screen repairs to battery replacements, ensuring your device is back in working condition fast.",
          bgColor:"#000839"},


   {image:"products-5.jpg",
              bgImage:"",
              description:"Accessories: Find a full range of accessories like chargers, cases, and headphones, handpicked for quality and durability.",
              bgColor:"#173E4F"},


          {image:"jioDigital.jpeg",
            bgImage:"",
            description:"Jio Mart Digital: As a Jio Mart Digital franchise, we offer digital shopping solutions for a wide variety of products.",
            bgColor:"#1F86C8"},


         
  ]
  return (
    
    <div className='text-white min-h-screen'>
      {/* <SmallHeading prop={{h1:"Services ",p:"We pride ourselves on offering a complete mobile shopping experience:"}}/> */}
      
      {
        array.map(obj=>(
          <ReusableComp {...obj}/>
        ))
      }
      
     
    </div>
  )
}

export default Services
