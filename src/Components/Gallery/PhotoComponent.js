import React from 'react';
import '../../CSS/photoComponent.css';

const PhotoComponent = ({photoImg,photoInfo}) => {
  return (
    <div className='photoComponent'>
        <div className='photoImg'>
            <img src={photoImg} alt="photo_img" className='photoImg_inner'/>

        </div>
        <div className='photImg_info'>
            <h4>{photoInfo}</h4>
        </div>
    </div>
  )
}

export default PhotoComponent