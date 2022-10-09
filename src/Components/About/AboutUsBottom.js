import React from 'react'
import { GrTechnology,GrRestroomWomen } from "react-icons/gr";
import { FaChalkboardTeacher } from "react-icons/fa";
import '../../CSS/aboutusBottom.css'

const AboutUsBottom = () => {
  return (
    <div className='aboutUsBottom'>
        <div className='aboutus_row'>
            <div className=' aboutus_icon'>
            <GrTechnology className='aboutusIcon'/>
            </div>
            <div className='aboutus_rowInfo'>
                <h3>Latest Technologies and Upgraded Monitoring Tools : </h3>
                <p>We work on some of the Latest Technologies namely Docker / Redhat / Gitlba / Jenkins / Devops / Pentration Testing / Palo Alto Firewall. We also offer premium services in Digital Marketing / SEO. We use upgraded monitoring tools such as Nagios. We extend complete and end to end Technical Support to Corporate Buisnesses and Multinationals.</p>
            </div>
        </div>
        <div className='aboutus_row'>
            <div className=' aboutus_icon'>
            <GrRestroomWomen className='aboutusIcon' style={{color:'#ff3738'}}/>
            </div>
            <div className='aboutus_rowInfo'>
                <h3>Women Safety and Professional Empowerment : </h3>
                <p>Mahendra Technosoft as an organization lays down a very Strong and Safe Platform for women to discover and nurture their hidden career ambitions without any hassles or restrictions thereby stimulating their power of Self Reliance. Mahendra Technosoft is very proud of its Women workforce for being an Indispensable asset for the organization right from the date of Incorporation. We work as a Family and we consider Women Safety and Integrity as a Priority.</p>
            </div>
        </div>
        <div className='aboutus_row'>
            <div className=' aboutus_icon'>
            <FaChalkboardTeacher className='aboutusIcon'/>
            </div>
            <div className='aboutus_rowInfo'>
                <h3>Mentorship and Guidance : </h3>
                <p>We create a very Open and Conducive ambience for all our employees. We encourage our workforce to be Creative as well as Constructive. We offer continuous and complete support to our Employees as far as the training and job assistance are concerned. We work together as a strong unit to accomplish our organizational goals and objectives. We ensure Equal and Sustainable Growth of all our employee associates. We regularly conduct interactive sessions with our employees to monitor and improve their Performance / Quality / Productivity and Skillset.</p>
            </div>
        </div>
    </div>
  )
}

export default AboutUsBottom