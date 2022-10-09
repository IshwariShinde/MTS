import React from 'react'
import MtiansExComponent from './MtiansExComponent'
import '../../CSS/mtiansExperience.css'

const MtiansExperience = () => {
  return (
    <div className='mtiansExperience'>
        <h1>Feedback From M-Tians</h1>
        <div className='mtiansExperience_inner'>
        <MtiansExComponent videoUrl="https://youtu.be/A1qFnTC8rn4"/>
        <MtiansExComponent videoUrl="https://youtu.be/2RACdyW4aJg"/>
        <MtiansExComponent videoUrl="https://youtu.be/itvEkAjIxWc"/>
        <MtiansExComponent videoUrl="https://youtu.be/muOKyIt_Xo4"/>
        <MtiansExComponent videoUrl="https://youtu.be/ZWqDc6BHi4s"/>
        <MtiansExComponent videoUrl="https://youtu.be/lYaIk_MXZUk"/>
        <MtiansExComponent videoUrl="https://youtu.be/H9xHp4grCU8"/>
        <MtiansExComponent videoUrl="https://youtu.be/Qo8jyfmRg4o"/>
    </div></div>
  )
}

export default MtiansExperience