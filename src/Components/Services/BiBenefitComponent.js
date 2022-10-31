import React from 'react'
import '../../CSS/bibenefitcomponent.css'

const BiBenefitComponent = ({ benefittitle, benefitdescription }) => {
    return (
        <div className='bi_benefitComponent'>
            <div className='bi_benefit_left'>
                <h2>{benefittitle}</h2>
                <p className='bi_line'></p>
            </div>
            <div className='bi_benefit_right'>
                <p>{benefitdescription}</p>
            </div>

        </div>

    )
}

export default BiBenefitComponent