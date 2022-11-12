import React from 'react'
import Adminsidebar from './Admin/Adminsidebar'

import '../CSS/admin.css'
import Adminblog from './Admin/Adminblog'
import AdminPhotos from './Admin/AdminPhotos'
import { Route, BrowserRouter, Routes} from "react-router-dom"

const Admin = () => {
  return (
    <div className='admin'>
        <Adminsidebar />
      
        {/* <Routes>
            <Route path='/adminblogs' element={<Adminblog />} />
        </Routes>
       */}
       
         {/* <BrowserRouter>
        
         <Routes>
         <Adminsidebar />
         <Route path='/adminblogs' element={<Adminblog />} />
         <Route path='/adminphotos' element={<AdminPhotos />} />
         </Routes>
         </BrowserRouter> */}
       
        
      
    
    </div>
  )
}

export default Admin