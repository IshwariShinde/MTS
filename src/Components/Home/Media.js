import React from 'react';
import '../../CSS/media.css'

const Media = () => {
  return (
    <div className='media'>
        <div className='media_heading'>
            <h2>Our Media Coverage</h2>
        </div>
        <div className='media_mainContent'>
        <div className='media_content'>
        <marquee behavior="scroll" direction="left">
                <img src="https://ishwarishinde.github.io/cdn/media2.png" alt='ptimg' className='media_img'/>
                </marquee>

            </div>
        <div className='media_content'>
        <marquee behavior="scroll" direction="left">
                <img src="https://ishwarishinde.github.io/cdn/media1.png" alt='ptimg' className='media_img'/></marquee>

            </div>
        <div className='media_content'>
        <marquee behavior="scroll" direction="left">
                <img src="https://ishwarishinde.github.io/cdn/media2.png" alt='ptimg' className='media_img'/></marquee>

            </div>
        <div className='media_content'>
        <marquee behavior="scroll" direction="left">
                <img src="https://ishwarishinde.github.io/cdn/media1.png" alt='ptimg' className='media_img'/></marquee>

            </div>
        <div className='media_content'>
        <marquee behavior="scroll" direction="left">
                <img src="https://ishwarishinde.github.io/cdn/media2.png" alt='ptimg' className='media_img'/></marquee>

            </div>
        <div className='media_content'>
        <marquee behavior="scroll" direction="left">
                <img src="https://ishwarishinde.github.io/cdn/media1.png" alt='ptimg' className='media_img'/></marquee>

            </div>
        </div>

    </div>
  )
}

export default Media