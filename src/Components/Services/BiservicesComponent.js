import React from 'react'
import '../../CSS/biservice.css'

const BiservicesComponent = ({bisimg,bistitle,bisdescription}) => {
  return (
    <div className='bi_service_component'>
    <div className="bi_flip bi_flip-vertical">
    <div className="bi_front"  >
        <img src={bisimg} alt="img" />
       <h1 className="bi_text-shadow">{bistitle}</h1>
    </div>
    <div className="bi_back">
       <h2>{bistitle}</h2>
       <p>{bisdescription}</p>
    </div>
</div>
     
    </div>
  )
}

export default BiservicesComponent