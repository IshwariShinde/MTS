import React from 'react'
import '../../CSS/webdevprocess.css'

const WebDevProcess = ({webprocessicon,webprocesstitle,webprocessdescription,webprocessNo}) => {
  return (
    <div className='webdevprocess'>
        <div class="webcard">
            <div class="webface webface1">
                <div class="webcontent">
                    <img src={webprocessicon} alt="webicon"/>
                    <h3>{webprocesstitle}</h3>
                    <h5>{webprocessNo}</h5>
                </div>
            </div>
            <div class="webface webface2">
                <div class="webcontent">
                    <p>{webprocessdescription}</p>
                        
                </div>
            </div>
        </div>
    </div>
  )
}

export default WebDevProcess