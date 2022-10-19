import React from 'react'
import '../../CSS/dmservicecomponent.css'

const DigitalMarketingServicesComponent = ({dmtitle,dmdescription}) => {
  return (
    <div className='dmservicescomponent'>
        
            <h5>{dmtitle}</h5>
            <p>{dmdescription}</p>
        
    </div>
  )
}

export default DigitalMarketingServicesComponent