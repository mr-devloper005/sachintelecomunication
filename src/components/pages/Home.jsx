
// import React from 'react'
// import { Outlet } from 'react-router-dom'
// import VerticalNav from '../ui-components/VerticalNav'
// import Logo from './Logo'
// import { useRef,useState,useEffect} from 'react'

// import { TextPlugin } from "gsap/TextPlugin";
// import {gsap} from 'gsap';
// import MainNavbar from './MainNavbar'
// import Card from '../ui-components/Card'

// gsap.registerPlugin(TextPlugin);




// function Home(){

// let headingRef = useRef(null)

// const p1Ref = useRef(null);
// const p2Ref = useRef(null);
// const p3Ref = useRef(null);
// const p4Ref = useRef(null);
// const p5Ref = useRef(null);

// // useEffect(() => {
// //   // GSAP Animation Sequence
// //   gsap.to(p1Ref.current, { text: "Welcome", duration: 0.5, delay: 0.5 });
// //   gsap.to(p2Ref.current, { text: "To", duration: 0.5, delay: 1 });
// //   gsap.to(p3Ref.current, { text: "Sachin", duration: 0.5, delay: 1.5 });
// //   gsap.to(p4Ref.current, { text: "Telecommunication", duration: 0.5, delay: 2 });
// // }, []);


// // useEffect(() => {
// //   // GSAP Timeline
// //   const tl = gsap.timeline();

// //   // Animation sequence


// //     tl.to(p1Ref.current, { text: "Welcome", duration: 0.5, delay: 0.5 })
// //   .to(p2Ref.current, { text: "To", duration: 0.5,  },'+=0.1')
// //   .to(p3Ref.current, { text: "Sachin", duration: 0.5,  },'+=0.1')
// //   .to(p4Ref.current, { text: "Telecommunication", duration: 0.5,  },'+=0.1')

// //   tl.add(() => {
// //     gsap.delayedCall(0.5, () => {
// //       gsap.set([p1Ref.current, p2Ref.current, p3Ref.current, p4Ref.current], { display: 'none' });


// //     });
// //   });
  
// // }, []);

// useEffect(() => {
//   // GSAP Timeline
//   const tl = gsap.timeline();

//   // Animation sequence for the first set of texts
//     tl.to(p1Ref.current, { text: "Welcome", duration: 0.5, delay: 0.5 })
//   .to(p2Ref.current, { text: "To", duration: 0.5,  },)
//   .to(p3Ref.current, { text: "Sachin", duration: 0.5,  },'+=0.1')
//   .to(p4Ref.current, { text: "Telecommunication", duration: 0.5,  },'+=0.1')
//     .add(() => {
//       gsap.delayedCall(0.5, () => {
//         // Hide the first set of texts
//         gsap.set([p1Ref.current, p2Ref.current, p3Ref.current, p4Ref.current], { display: 'none' });

//         // Show the new text
//         gsap.to(p5Ref.current, { text: "One place To Complete Your All Tech Needs.", duration: 2, opacity: 1, delay: 0.5 });
//       });
//     });
// }, []);

// useEffect(()=>{
//     gsap.fromTo(
//       headingRef.current,        // Target element
//       { opacity: 0, y: -300 }, // From: initial state
//       { opacity: 1, y: 0, duration: 1, ease: 'power2.out' } // To: final state
//     );
// },[])

//   return(
//    <>
// <div className="h-screen flex justify-center items-center w-full">
//             <main className=" pt-4 w-full  h-full overflow-y-auto bg-black p-4 shadow-md rounded-lg">

//              <div className='w-full  flex items-center  sm:justify-around'> <p ref={headingRef} className='text-white pr-2 text-3xl flex items-center w-5/6 h-20 md:text-7xl font-extrabold'>Sachin Telecommunication</p> </div>
// <div className=' w-full flex justify-center flex-col items-center' >
  
// <div
//       className="rounded-xl pt-8 flex flex-col gap-3 font-extrabold mt-3"
//       style={{ backgroundColor:  '#025FFD', width: "96%" ,height:"380px "}}
//       >
//       <p ref={p1Ref} className="pl-24 text-6xl">
//         &nbsp;
//       </p>
//       <p ref={p2Ref} className="pl-44 text-6xl">
//         &nbsp;
//       </p>
//       <p ref={p3Ref} className="pl-32 text-6xl">
//         &nbsp;
//       </p>
//       <p ref={p4Ref} className="pl-2 text-6xl">
//         &nbsp;
//       </p>

//       <p ref={p5Ref} className="opacity-0 pl-5 tracking-wide text-7xl  md:text-7xl lg:text-8xl font-bold ">&nbsp;</p>
//     </div>
//     <MainNavbar/>
    
// </div>

// <div className='h-72 w-full flex'><Card/>
// <Card/></div>


//             </main>
//         </div>
//    </>
//   )
// }

// export default Home

// 172.30.128.1


