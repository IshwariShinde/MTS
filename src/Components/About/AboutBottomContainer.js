import React from 'react';
import '../../CSS/abtbottomcontainer.css';

const AboutBottomContainer = ({abtBottomImg,abtBottomTitle}) => {
  return (
    <div className='abt_bottom_container'>
        <img src={abtBottomImg} alt="abtBottomImg" className='abt_bottom_container_img'/>
        <p className='abt_bottom_title'>{abtBottomTitle}</p>

    </div>
  )
}

export default AboutBottomContainer