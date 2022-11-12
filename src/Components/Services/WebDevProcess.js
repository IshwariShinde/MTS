import React from 'react'
import '../../CSS/webdevprocess.css'

const WebDevProcess = ({webprocessicon,webprocesstitle,webprocessdescription}) => {
  return (
    <div className='webdevprocess'>
        <div className="webcard">
            <div className="webface webface1">
                <div className="webcontent">
                    <img src={webprocessicon} alt="webicon"/>
                    <h3>{webprocesstitle}</h3>
                   
                </div>
            </div>
            <div className="webface webface2">
                <div className="webcontent">
                    <p>{webprocessdescription}</p>
                        
                </div>
            </div>
        </div>
    </div>
  )
}

export default WebDevProcess