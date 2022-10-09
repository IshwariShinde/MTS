import React from 'react'
import '../../CSS/feedBack.css'

const Feedback = () => {
    return (
        <div className='feedBack'>
            <h1>Give Your Feedback</h1>
            <form className='feedBack_form'>
                <div className='feedBack_formRow'>
                    <label htmlFor='myName' className='label_weight' >Full Name</label><br></br>
                    <input type="text" placeholder='Full Name' id='myName' />
                </div>
                <div className='feedBack_formRow'>
                    <label htmlFor='myEmail' className='label_weight' >Email Address</label><br></br>
                    <input type="email" placeholder='mts@gmail.com' id='myEmail' />
                </div>
                <div className='feedBack_formRow'>
                    <label htmlFor='dob' className='label_weight'>Date of birth</label><br></br>
                    <input type="date" id='dob' />
                </div>
                <div className='feedBack_formRow'>
                    <p className='label_weight'>What is your Work Experience As Freelancers?</p>
                    <input type="radio" id="myExperience1" />
                    <label htmlFor="myExperience1">Good</label><br />
                    <input type="radio" id="myExperience2" />
                    <label htmlFor="myExperience2">Bad</label><br />
                </div>
                <div className='feedBack_formRow'>
                    <p className='label_weight'>You want to become our freelancer members for long time ?</p>
                    <input type="radio" id="aggrement1" />
                    <label htmlFor="aggrement1">Yes</label><br />
                    <input type="radio" id="aggrement2" />
                    <label htmlFor="aggrement2">No</label><br />
                </div>
                <div className='feedBack_formRow'>
                    <p className='label_weight'>What is your Experience About M-Technosoft's Higher Staff (TL/Managers) ?</p>
                    <input type="radio" id="rating1" />
                    <label htmlFor="rating1">Good</label><br />
                    <input type="radio" id="rating2" />
                    <label htmlFor="rating2">Excellent(Very Supportive)</label><br />
                    <input type="radio" id="rating3" />
                    <label htmlFor="rating3">Poor(Not Supportive)</label><br />
                    <input type="radio" id="rating4" />
                    <label htmlFor="rating4">Bad</label><br />
                </div>
                <div className='feedBack_formRow'>
                    <p className='label_weight'>What is your Experience About Company Management ?</p>
                    <input type="radio" id="myExperience" />
                    <label htmlFor="myExperience">Very Good</label><br />
                    <input type="radio" id="myExperience" />
                    <label htmlFor="myExperience">Very Excellent</label><br />
                    <input type="radio" id="myExperience" />
                    <label htmlFor="myExperience">Very Bad</label><br />
                </div>
                <div className='feedBack_formRow'>
                    <p className='label_weight'>Rate M - Technosoft Company From (5*)</p>
                    <input type="radio" id="myExperience" />
                    <label htmlFor="myExperience">*****</label><br />
                    <input type="radio" id="myExperience" />
                    <label htmlFor="myExperience">****</label><br />
                    <input type="radio" id="myExperience" />
                    <label htmlFor="myExperience">***</label><br />
                    <input type="radio" id="myExperience" />
                    <label htmlFor="myExperience">**</label><br />
                    <input type="radio" id="myExperience" />
                    <label htmlFor="myExperience">*</label><br />
                </div>
                <div className='feedBack_formRow'>
                    <label htmlFor='phone' className='label_weight'>Enter a number</label><br />
                    <input type="number" placeholder='Mobile' id='phone' />
                    </div>
                <div className='feedBack_formRow'>
                    <label htmlFor='suggestion' className='label_weight'>Any Suggestion / Feeback</label><br/>
                    <textarea  placeholder='Drop your suggestion' id='suggestion' />
                    
                    </div>
                <div className='feedBack_formRow'>
                   <input type="checkbox"  id='declaration' />
                   <label htmlFor='declaration' className='label_weight'>I declare that the info I've provided is accurate & complete (Personal info. will be hidden.)</label>
                    </div>
                    <div className='feedback_btn'>
                        <input type="submit" className='feedback_btnInner'/>
                    </div>

            </form>

        </div>
    )
}

export default Feedback