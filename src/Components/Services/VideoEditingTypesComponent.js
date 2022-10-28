import React from 'react'
import '../../CSS/videotypecomponent.css'

const VideoEditingTypesComponent = ({videotypeicon,videotypetitle,videotypedescription}) => {
  return (
    <div className='videoEditingTypesComponent'>
        <div className='VEWrapper'><img src={videotypeicon} alt='videoicon' />
        <h5>{videotypetitle}</h5></div>
        <p>{videotypedescription}</p>
    

    </div>
  )
}

export default VideoEditingTypesComponent