import React from 'react'
// import Amt1 from '../../Images/amt1.png';
// import Amt2 from '../../Images/amt2.png';
// import Amt3 from '../../Images/amt3.png';
// import Amt4 from '../../Images/amt4.png';
import '../../CSS/achievements.css';

const Achievements = () => {
  return (
    <div className='achievements'>
      
    <div className='achievements_content'>
      <h1>Our Achievements</h1>
      <div className='achievements_inner'>
            <div className='achievement_card'>
                <h1>103+</h1>
                <p>Projects Completed</p>
            </div>
            <div className='achievement_card'>
                <h1>151+</h1>
                <p>Happy Clients</p>
            </div>
            <div className='achievement_card'>
                <h1>75%</h1>
                <p>Referral Clients</p>
            </div>
            <div className='achievement_card'>
                <h1>4000+</h1>
                <p>Visitors</p>
            </div>
            </div>

        </div>
        {/* <div className='amt_heading'>
        <h2>Our Achievements</h2>
        </div>
        <div className='amt_mainContent'>
        
        <div className='amt_content'>
            <div className='amt_img'>
                <img src="https://ishwarishinde.github.io/cdn/projects_completed.png" alt="amt" className='achievement_img'/>
            </div>
            <div className='amt_info'>
                <div className='amt_num'>103+</div>
                <div className='amt_text'>Projects Completed</div> 
            </div>

        </div>
        <div className='amt_content'>
            <div className='amt_img'>
                <img src="https://ishwarishinde.github.io/cdn/happy_clients.png" alt="amt" className='achievement_img'/>
            </div>
            <div className='amt_info'>
                <div className='amt_num'>151+</div>
                <div className='amt_text'>Happy Clients</div> 
            </div>

        </div>
        <div className='amt_content'>
            <div className='amt_img'>
                <img src="https://ishwarishinde.github.io/cdn/refral.png" alt="amt" className='achievement_img'/>
            </div>
            <div className='amt_info'>
                <div className='amt_num'>75%</div>
                <div className='amt_text'>Referral Clients</div> 
            </div>

        </div>
        <div className='amt_content'>
            <div className='amt_img'>
                <img src="https://ishwarishinde.github.io/cdn/visitors.png" alt="amt"className='achievement_img' />
            </div>
            <div className='amt_info'>
                <div className='amt_num'>4000+</div>
                <div className='amt_text'>Visitors</div> 
            </div>

        </div></div>
        */}
    </div>
  )
}

export default Achievements