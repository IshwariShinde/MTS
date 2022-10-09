import React from 'react'
import TeamMember from './TeamMember'
import '../../CSS/team.css'

const Team = () => {
  return (
    <div className='team'>
        <h1>Our Team</h1>
        <div className='team_inner'>
        <TeamMember teamImg="https://ishwarishinde.github.io/cdn/tm1.png" name="Mahendra Nikam" position="Managing Director" className="team_member_align" />
        <TeamMember teamImg="https://ishwarishinde.github.io/cdn/tm2.png" name="Rahul Dangat" position="Director Account & Finance" className="team_member_align" />
        <TeamMember teamImg="https://ishwarishinde.github.io/cdn/tm3.png" name="Rahul Date" position="Managing Director" className="team_member_align" />
        <TeamMember teamImg="https://ishwarishinde.github.io/cdn/tm4.png" name="Roshan Hiray" position="Digital Marketing Operation Head" className="team_member_align" /></div>
    </div>
  )
}

export default Team