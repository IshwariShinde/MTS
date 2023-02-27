import React from 'react'
import '../../CSS/expertiseComponent.css'


const ExpertiseComponent = ({expertiseImg, expertiseTitle,expertiseInfo,expertiseHeading}) => {
  return (
    <div className='expertiseComponent'>
        <div className='expertise_container'>
        <div className='expertise_card' >
      <div className='expertise_image' >
        <img  src={expertiseImg} alt="expertiseImg" className='expertise_image_inner'/>
      </div>
      <div className='expertise_content' >
        <h3>{expertiseTitle}</h3>
        <p>{expertiseInfo}</p>
      </div>
      <div className='expertise_mainheading'>
        <h4>{expertiseHeading}</h4>
      </div>
    </div>    
    </div>
    </div>
  )
}

export default ExpertiseComponent