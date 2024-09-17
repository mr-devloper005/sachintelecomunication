import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function AdminPanel() {
  return (
    <div className='h-screen flex '>
      <div id="verticalNav" className='pl-4 h-screen  w-1/5 flex flex-col justify-evenly items-center bg-slate-300'>

<NavLink to={'./'} className='font-bold '>Add Stock</NavLink>
<NavLink to={'./uploadpost'} className='font-bold ' >Add Post</NavLink>

        
      </div>

<Outlet/>


    </div>
  )
}

export default AdminPanel
