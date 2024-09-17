import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Home from './components/pages/Home'
import VerticalNav from './components/ui-components/VerticalNav'
import {BrowserRouter, Route, Routes,useLocation} from 'react-router-dom'
import AboutUs from './components/pages/AboutUs'
import Services from './components/pages/Services'
import UploadPost from './components/ui-components/UploadPost'
import SeePost from './components/ui-components/SeePost'
import MobileStock from './components/ui-components/MobileStock'
import CurrentStock from './components/ui-components/CurrentStock'
import DarkLightIcon from './components/smallComp/DarkLightIcon'
import Bars from './components/smallComp/Bars'
import Share from './components/smallComp/Share'
import Home2 from './components/pages/Home2'
import NavigationBar from './components/ui-components/NavigationBar'
import FuturePlans from './components/pages/FuturePlans'
import ContactUs from './components/pages/ContactUs'
import AdminPanel from './components/ui-components/admin/AdminPanel'


// function App() {
//   const location = useLocation();

//   const isHomePage = location.pathname === '/';

//   return (
//     <div className={`h-full ${
//       isHomePage ? 'min-h-[220vh]' : 'min-h-screen'
//     } bg-gray-300 dark:bg-black`} >
//     <Routes>
// <Route path='/' element={<Home2/>}>

// </Route><Route path='/services' element={<Services/>}/>
//   <Route path='/aboutus' element={<AboutUs/>}/>
//       {/* <Route path='/' element={<Home/>}></Route>
//       <Route path="/" element={ <VerticalNav/>}>
      
     

//       </Route>

//  <Route path='/uploadPost' element={<UploadPost/>}/>
//  <Route path='/seePost' element={<SeePost/>}/>          
//  <Route path='/CurrentStock' element={<CurrentStock/>}/>
//  <Route path='/MobileStock' element={<MobileStock/>}/> */}
 
 
//   </Routes>
// <NavigationBar/>
//   </div>
//   )
// }

// export default App







function App() {
  // const location = useLocation();

  // const isHomePage = location.pathname === '/';

  return (
    <div className={`min-h-screen w-full  bg-gray-300 dark:bg-black`} >

    <Routes>
<Route path='/' element={<Home2/>}></Route>
<Route path='/services' element={<Services/>}/>
  <Route path='/aboutus' element={<AboutUs/>}/>
  <Route path='/futureplans' element={<FuturePlans/>}/>
  <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='/seeposts' element={<SeePost/>}/>
    <Route path='/admin' element={<AdminPanel/>}>
    <Route path='/admin/' element={<MobileStock/>}/>
    <Route path='/admin/uploadpost' element={<UploadPost/>}/>
    </Route>

      {/* <Route path='/' element={<Home/>}></Route>
      <Route path="/" element={<VerticalNav/>}>
      

      </Route>

 <Route path='/uploadPost' element={<UploadPost/>}/>
           
 <Route path='/CurrentStock' element={<CurrentStock/>}/>
 <Route path='/MobileStock' element={<MobileStock/>}/> */}
 
 
  </Routes>
<NavigationBar/>
  </div>
  )
}

export default App

