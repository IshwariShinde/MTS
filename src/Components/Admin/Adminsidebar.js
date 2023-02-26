import React from 'react'
import '../../CSS/adminsidebar.css'
import AdminsidebarRow from './AdminsidebarRow'
import { NavLink } from 'react-router-dom'
import { IoMdPhotos } from "react-icons/io";
import { FaBlogger } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
import { MdContactMail } from "react-icons/md";

const Adminsidebar = () => {
  return (
    <div className='adminsidebar'>
       <NavLink to='/admin' className='adminnavlink'> <AdminsidebarRow Sideicon={FaBlogger} sidetitle="Blogs"/></NavLink>
       <NavLink to='/adminphotos' className='adminnavlink'> <AdminsidebarRow Sideicon={IoMdPhotos} sidetitle="Photos"/></NavLink>
       <NavLink to='/adminfeedback' className='adminnavlink'> <AdminsidebarRow Sideicon={VscFeedback} sidetitle="Feedback" /></NavLink>
       <NavLink to='/admincontact' className='adminnavlink'> <AdminsidebarRow Sideicon={MdContactMail} sidetitle="Contact"/></NavLink>
    </div>
  )
}

export default Adminsidebar