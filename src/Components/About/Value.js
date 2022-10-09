import React from 'react'
import ValueComponent from './ValueComponent'
import { BsAwardFill,BsEyeFill } from "react-icons/bs";
import { IoIosRocket,IoIosSunny,IoIosTime } from "react-icons/io";
import '../../CSS/value.css'

const Value = () => {
  return (
    <div className='value'>
        <h1>Our Core Values</h1>
        <div className='value_inner'>
        <ValueComponent Icon={BsAwardFill} content="Passionate to deliver excellence every time" />
        <ValueComponent Icon={BsEyeFill} content="Passionate to deliver excellence every time" />
        <ValueComponent Icon={IoIosRocket} content="Passionate to deliver excellence every time" />
        <ValueComponent Icon={IoIosSunny} content="Passionate to deliver excellence every time" />
        <ValueComponent Icon={IoIosTime} content="Passionate to deliver excellence every time" />
        </div>
    </div>
  )
}

export default Value