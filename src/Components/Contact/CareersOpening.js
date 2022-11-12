import React from 'react'
import '../../CSS/careersOpening.css'
import { RiArrowDropDownLine } from "react-icons/ri";
// import useCollapse from 'react-collapsed';

const CareersOpening = ({openingTitle,skills,experience,responsibility}) => {
    function CardToggle(){
        let dropicon=document.querySelector('.opening_icon')
        let content=document.querySelector('.content')

        dropicon.addEventListener('click', ()=>{
            content.classList.toggle("content_visibility")
        })
    }
    
          
    

  
    return (
        <div className='careersOpening' onClick={CardToggle} >
            <div type="button" className="collapsible">{openingTitle}< RiArrowDropDownLine className='opening_icon'/></div>
            <div className="content content_visibility">
                <p><b>Skills:</b>{skills}<br></br></p>
                <p><b>Experience Level:</b>{experience}<br></br></p>
                <p><b>Responsibility:</b>{responsibility}</p>
            </div>
        </div>
    )
}

export default CareersOpening