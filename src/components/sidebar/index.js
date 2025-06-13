import React from 'react'
import './sidebar.css'
import SidebarButton from './sidebarButton'

export default function Sidebar() {
  return (
    <div className='sidebar-container'>
      <img src='https://via.placeholder.com/300' className='profile-img' alt='profile'></img>

      <div>
        <SidebarButton/>
        <SidebarButton/>
        <SidebarButton/>
        <SidebarButton/>
        <SidebarButton/>
      </div>
        <SidebarButton/>
    </div>
  )
}
