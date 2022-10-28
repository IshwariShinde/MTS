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
import Blog1 from './Components/Blogs/Blog1'
import Blog2 from './Components/Blogs/Blog2'
import Blog3 from './Components/Blogs/Blog3'
import Blog4 from './Components/Blogs/Blog4'
import Blog5 from './Components/Blogs/Blog5'
import Blog6 from './Components/Blogs/Blog6'
import Blog7 from './Components/Blogs/Blog7'
import CustomSoftware from './Components/Services/CustomSoftware'
import WebDevelopment from './Components/Services/WebDevelopment'
import Aos from 'aos';
import 'aos/dist/aos.css';
import DigitalMarketing from './Components/Services/DigitalMarketing'
import VideoEditing from './Components/Services/VideoEditing'

const App = () => {
  useEffect(()=>{
    Aos.init({duration:3000});
  }, []);
  return (
    <div className='App'>
      <BrowserRouter>
      <Header />
      <Routes>
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
        
        
        <Route path='/photos' element={<Photos />} />
        <Route path='/media' element={<MediaGallery/>}/>
        <Route path='/contactus' element={ <Contact/>}/>
        <Route path='/careers' element={ <Careers/>}/>
        <Route path='/blogs' element={ <Blog/>}/>
        <Route path='/feedback' element={ <Feedback/>}/>
        <Route path='/workexperience' element={ <MtiansExperience/>}/>
        <Route path='/getyourworkdone' element={  <GetWorkDone/>} />
        <Route path='/blog1description' element={ <Blog1/>} />
        <Route path='/blog2description' element={ <Blog2/>} />
        <Route path='/blog3description' element={ <Blog3/>} />
        <Route path='/blog4description' element={ <Blog4/>} />
        <Route path='/blog5description' element={ <Blog5/>} />
        <Route path='/blog6description' element={ <Blog6/>} />
        <Route path='/blog7description' element={ <Blog7/>} />
        {/* <Route path='/workexperience' element={ <Blog7/>} /> */}
       
      
        
       
        
       
       
        
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
