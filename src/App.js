import React, { useEffect } from 'react'
import Footer from './Components/Home/Footer'
import Header from './Components/Home/Header'
import {  BrowserRouter,Route, Routes} from "react-router-dom"
import Home from './Components/Home'
import About from './Components/About'
import Photos from './Components/Gallery/Photos'
import MediaGallery from './Components/Gallery/MediaGallery'
import Contact from './Components/Contact'
import Careers from './Components/Contact/Careers'
import Blog from './Components/Contact/Blog'
import Feedback from './Components/Contact/Feedback'
import MissonVision from './Components/About/MissonVision'
import WhyJoinUs from './Components/About/WhyJoinUs'
import Team from './Components/About/Team'
import MtiansExperience from './Components/Contact/MtiansExperience'
import GetWorkDone from './Components/Home/GetWorkDone'
import CustomSoftware from './Components/Services/CustomSoftware'
import WebDevelopment from './Components/Services/WebDevelopment'
import Aos from 'aos';
import 'aos/dist/aos.css';
import DigitalMarketing from './Components/Services/DigitalMarketing'
import VideoEditing from './Components/Services/VideoEditing'
import BusinessIntelligence from './Components/Services/BusinessIntelligence'
import Admin from './Components/Admin'
import AdminPhotos from './Components/Admin/AdminPhotos'
import Bloglist from './Components/Admin/Bloglist'
import AddBlog from './Components/Admin/AddBlog'
import DataAnnotation from './Components/Services/DataAnnotation'
import ContentAuditing from './Components/Services/ContentAuditing'
import BlogDescription from './Components/Contact/BlogDescription'
import AdminFeedback from './Components/Admin/AdminFeedback'
import AdminContact from './Components/Admin/AminContact'
import LoginAdmin from './Components/Admin/LoginAdmin'

const App = () => {
  useEffect(()=>{
    Aos.init({duration:3000});
  }, []);
  return (
    <div className='App'>
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path='/admin' element={<Bloglist/>} />
        <Route path='/adminphotos' element={<AdminPhotos/>} />
        <Route path='/adminfeedback' element={<AdminFeedback/>} />
        <Route path='/addblog' element={<AddBlog/>}/>
        <Route path='/admincontact' element={<AdminContact/>}/>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/whoweare' element={<About/>} />
        <Route path='/ourteam' element={ <Team />} />
        <Route path='/missionvision' element={<MissonVision />} />
        <Route path='/whyjoinus' element={<WhyJoinUs/>} />
      
       
        <Route path='/customsoftware' element={<CustomSoftware />} />
        <Route path='/webdevelopment' element= {<WebDevelopment/>}/>
        <Route path='/digitalmarketing' element= {<DigitalMarketing />}/>
        <Route path='/videoediting' element= {<VideoEditing />}/>
        <Route path='/businessintelligence' element= {<BusinessIntelligence />}/>
        <Route path='/dataannotation' element= {<DataAnnotation />}/>
        <Route path='/contentauditing' element= {<ContentAuditing />}/>
        
        
        <Route path='/photos' element={<Photos />} />
        <Route path='/media' element={<MediaGallery/>}/>
        <Route path='/contactus' element={ <Contact/>}/>
        <Route path='/careers' element={ <Careers/>}/>
        <Route path='/blogs' element={ <Blog/>}/>
        <Route path='/feedback' element={ <Feedback/>}/>
        <Route path='/workexperience' element={ <MtiansExperience/>}/>
        <Route path='/getyourworkdone' element={  <GetWorkDone/>} />
        <Route path='/blogdescription' element={ <BlogDescription/>} />
        {/* <Route path='/workexperience' element={ <Blog7/>} /> */}
       
      
        <Route path='/login' element={<LoginAdmin/>} />
       
        
       
       
        
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
