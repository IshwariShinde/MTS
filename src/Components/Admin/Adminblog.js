import React from 'react'
import '../../CSS/adminblog.css'
import { NavLink } from 'react-router-dom'
import Adminsidebar from './Adminsidebar'

const Adminblog = () => {
    return (
        <div className='adminblog'>
            <Adminsidebar />
            <div className='adminblog_content'>
                <div className='adminblognav'>
                <NavLink to="/allbloglist" >All Blogs</NavLink>
                <NavLink to="/addblog" >Add New Blog</NavLink>
            </div>
            </div>


        </div>
    )
}

export default Adminblog