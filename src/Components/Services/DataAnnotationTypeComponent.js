import React from 'react'
import '../../CSS/dataannotationtypecomponent.css'

const DataAnnotationTypeComponent = ({daimg,datitle,dadescription}) => {
  return (
    <div className='da_type_component'>
        <div className='DA_type1_left'>
                <img src={daimg} alt='img' />
                
            </div>
            <div className='DA_type1_right'>
                <h1>{datitle}</h1>
                <p>{dadescription}</p>
            </div>
    </div>
  )
}

export default DataAnnotationTypeComponent