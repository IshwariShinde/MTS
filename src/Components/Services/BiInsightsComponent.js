import React from 'react'
import '../../CSS/bicomponent.css'

const BiInsightsComponent = ({insighttitle,insightdescription,insightimg}) => {
  return (
    <div className='bi_component'>
        <div className='bi_component_left'>
            <h2>{insighttitle}</h2>
            <p>{insightdescription}</p>
        </div>
        <div className='bi_component_right'>
            <img src={insightimg} alt="img" />
        </div>
    </div>
  )
}

export default BiInsightsComponent