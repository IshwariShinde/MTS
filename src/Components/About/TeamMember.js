import React from 'react'
import '../../CSS/teamMember.css'

const TeamMember = ({teamImg,name,position}) => {
  return (
    <div className='teamMember'>
        <div className='teamImg'>
            <img src={teamImg} alt="img" className='team_inner_img' />
        </div>
        <div className='teamInfo'>
            <h4>{name}</h4>
            <p>{position}</p>
        </div>
    </div>
  )
}

export default TeamMember