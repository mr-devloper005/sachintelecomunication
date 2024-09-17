import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { NavLink } from 'react-router-dom';

const CardSlider = () => {

  let data = [{text:'Future Plans',image:"future-growth-plan.webp",link:"/mobilestock"},{text:'About us',image:"about-us.jpg",link:"/aboutus"},{text:'Services',image:"services.png",link:"/services"},{text:'Contact us',image:"contact-4.jpg",link:"/contactus"},{text:'Products',image:"phone.webp",link:"/admin"}]
 

  return (
   <>
      
<div className="relative overflow-x-scroll w-full mt-4 hide-scrollbar pl-5">
  <div className="flex w-max">
        {data.map(obj=>(
           
           <NavLink key={Math.random()} to={obj.link}>
           <div key={Math.random()} className="card w-32 sm:w-52 md:w-64 h-44 rounded-3xl relative flex justify-center back items-center bg-blue-500 mx-2" 
            style={{backgroundImage:`url(${obj.image})`, backgroundSize:'cover', backgroundPosition:'center'}}>
          <p className='absolute text-xl font-bold  bottom-1'>{obj.text}</p>
        </div> </NavLink>

        ))}
      </div></div>
    </>
     
   
  );
};

export default CardSlider;



 