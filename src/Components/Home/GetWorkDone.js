import React from 'react'
import '../../CSS/getWorkDone.css'

const GetWorkDone = () => {
  return (
    <div className='getWorkDone'>
        <div className='getWorkDone_header'>
            <div className='gwd_left'>
                <h1>Get Your Work Done</h1>
                <p><b>We are just a one message away.</b></p>
            </div>
            <div className='gwd_right'>
                <img src="https://ishwarishinde.github.io/cdn/getworkimg.gif" alt="gif" />
            </div>
        </div>
        <div className='getWorkDone_form'>
            <form className='getWorkDone_formInner'>
                <div className='gwdForm_row'>
                    <input type="text" placeholder='Full Name' />
                    <input type="email" placeholder='Email-id' />
                </div>
                <div className='gwdForm_row'>
                    <input type="phone" placeholder='Phone No' />
                    <input type="text" placeholder='Country' />
                </div>
                <div className='gwdForm_row'>
                    <input type="text" placeholder='Subject' id='subject' />
                   
                    
                </div>
              
                <div className='gwdForm_row'>
                <textarea placeholder="Project Description" />
                </div>
                <div className='gwdForm_row' id='work_file'>
                <input type="file" />
                </div>
                <div className='gwdForm_btn'>
                    <input type="submit" className='gwdForm_btnInner' />
                </div>
            </form>
        </div>
    </div>
  )
}

export default GetWorkDone