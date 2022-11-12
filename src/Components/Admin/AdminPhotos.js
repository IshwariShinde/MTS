import React from 'react'
import '../../CSS/adminsidebarphotos.css'
import Adminsidebar from './Adminsidebar'
const AdminPhotos = () => {
  return (
    <div className='adminphotos'>
        <Adminsidebar/>
        <div className='adminphotos_content'>
            Photos
        </div>
    </div>
  )
}

export default AdminPhotos