import React from 'react';
import '../../CSS/partners.css';

const Partners = () => {
  return (
    <div className='partners'>
        <div className='partners_heading'>
            <h2>Our Business Partners</h2>
        </div>
        <div className='partners_mainContent'>
            <div className='partner_content'>
                <img src="https://ishwarishinde.github.io/cdn/partner1.png" alt='ptimg' className='partners_img'/>

            </div>
            <div className='partner_content'>
                <img src="https://ishwarishinde.github.io/cdn/partner2.png" alt='ptimg' className='partners_img' />

            </div>
            <div className='partner_content'>
                <img src="https://ishwarishinde.github.io/cdn/partner3.png" alt='ptimg' className='partners_img'/>

            </div>
            <div className='partner_content'>
                <img src="https://ishwarishinde.github.io/cdn/partner4.png" alt='ptimg' className='partners_img'/>

            </div>
            <div className='partner_content'>
                <img src="https://ishwarishinde.github.io/cdn/partner5.png" alt='ptimg' className='partners_img'/>

            </div>

        </div>
    </div>
  )
}

export default Partners