import React from 'react';
import '../../CSS/valueComponent.css'

const ValueComponent = ({Icon,content}) => {
  return (
    <div className='valueComponent'>
        <Icon className="value_icon" /> 
        <p>{content}</p>

    </div>
  )
}

export default ValueComponent