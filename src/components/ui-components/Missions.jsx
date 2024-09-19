import React from 'react'
import ReusableComp from '../smallComp/ReusableComp' 

function Missions() {

  let array=[
    {image:"no-1.jpg",
      bgImage:"",
      description:" Our vision is to Establish Sachin Telecommunication as the top-rated mobile store in Rajasthan, achieving a market share of 30% in the region’s smartphone sales by 2030.",
    bgColor:"#0C2A7A"
    },

      {image:"exp.jpg",
        bgImage:"",
        description:"We aim to expand our franchise network to 10 additional locations within the next five years, with each store maintaining a 98% product availability rate. ",
    bgColor:"#006285"
      },


        {image:"collaboration.jpg",
          bgImage:"",
          description:" By partnering with Jio Mart Digital, we plan to increase our online sales by 200% over the next three years, making digital shopping more accessible to over 50,000 customers in the region. ",
          bgColor:"#0A32AB"},
          
        {image:"digital.webp",
          bgImage:"",
          description:" We envision becoming a key player in the digital transformation of Alwar, empowering at least 80% of households with modern mobile technology and comprehensive digital services by 2035.",
          bgColor:"#000839"},

         
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

export default Missions