import React from 'react'

const AdminsidebarRow = ({sidetitle}) => {
  return (
    <div className='adminsidebarrow'> 
        {/* <Sideicon className="adminsiderow_icon"  /> */}
    <h3 className='adminsiderow_title'>{sidetitle}</h3>
    </div>
  )
}

export default AdminsidebarRow