import React from 'react'
import '../../CSS/adminsiderow.css';

const AdminsidebarRow = ({Sideicon,sidetitle}) => {
  return (
    <div className='adminsidebarrow'> 
        <Sideicon className="adminsiderow_icon"  />
    <h3 className='adminsiderow_title'>{sidetitle}</h3>
    </div>
  )
}

export default AdminsidebarRow