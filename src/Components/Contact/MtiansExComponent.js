import React from 'react'
import ReactPlayer from "react-player";
import '../../CSS/mtiansExComponent.css'

const MtiansExComponent = ({videoUrl}) => {
  return (
    <div className='mtiansExComponent'>
        
        <div className='video_box'>
            <ReactPlayer url={videoUrl} controls className="video_box_inner"/>
        </div>
    </div>
  )
}

export default MtiansExComponent