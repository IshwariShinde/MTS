import React from 'react'
import '../../CSS/adminsidebar.css'
import AdminsidebarRow from './AdminsidebarRow'
import { NavLink } from 'react-router-dom'

const Adminsidebar = () => {
  return (
    <div className='adminsidebar'>
       <NavLink to='/adminblogs' className='adminnavlink'> <AdminsidebarRow sidetitle="Blogs"/></NavLink>
       <NavLink to='/adminphotos' className='adminnavlink'> <AdminsidebarRow sidetitle="Photos"/></NavLink>
       <NavLink to='/adminfeedback' className='adminnavlink'> <AdminsidebarRow sidetitle="Feedback"/></NavLink>
       <NavLink to='/admincontact' className='adminnavlink'> <AdminsidebarRow sidetitle="Contact"/></NavLink>
    </div>
  )
}

export default Adminsidebar