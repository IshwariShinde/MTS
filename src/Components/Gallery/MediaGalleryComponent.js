import React from 'react'
import '../../CSS/mediaGalleryComponent.css'

const MediaGalleryComponent = ({mediaImg,mediaInfo}) => {
  return (
    <div className="mediaComponent">
        <div className='mediaImg'>
            <img src={mediaImg} alt="media_img" className='mediaImg_inner'/>

        </div>
        <div className='mediaImg_info'>
            <h4>{mediaInfo}</h4>
        </div>

    </div>
  )
}

export default MediaGalleryComponent