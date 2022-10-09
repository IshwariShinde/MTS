import React from 'react';
import '../../CSS/careers.css'
import CareersOpening from './CareersOpening';

const Careers = () => {

  // const [filename, setFilename] = useState()
 
  return (
    <div className='careers'>
      <h1>Current Openings</h1>
      <div className='careers_inner'>
        <div className='openings'>
          <CareersOpening openingTitle="DotNet Developer" skills="  any Programming Language, Html, CSS, JavaScript, jQuery, Angular, Php, Java. .net " experience="0 to 1 year" responsibility="  Team Management, Project Management etc.  " />
          <CareersOpening openingTitle="DotNet Developer" skills="  any Programming Language, Html, CSS, JavaScript, jQuery, Angular, Php, Java. .net " experience="0 to 1 year" responsibility="  Team Management, Project Management etc.  " />
          <CareersOpening openingTitle="DotNet Developer" skills="  any Programming Language, Html, CSS, JavaScript, jQuery, Angular, Php, Java. .net " experience="0 to 1 year" responsibility="  Team Management, Project Management etc.  " />
          <CareersOpening openingTitle="DotNet Developer" skills="  any Programming Language, Html, CSS, JavaScript, jQuery, Angular, Php, Java. .net " experience="0 to 1 year" responsibility="  Team Management, Project Management etc.  " />
          <CareersOpening openingTitle="DotNet Developer" skills="  any Programming Language, Html, CSS, JavaScript, jQuery, Angular, Php, Java. .net " experience="0 to 1 year" responsibility="  Team Management, Project Management etc.  " />
        </div>
        <div className='resume_form'>
          <form className='resume_form_inner'>
            <div className='resume_form_row'>
              <select className='resume_form_input'>
              <option >-- Select Post --</option>
                <option>Dot Net Developer</option>
                <option>Software Engineer(IT) Internship</option>
                <option>Video Content Quality Analyst</option>
                <option>Gaming Video Content Auditors/Freelancer</option>
                <option>Novel Editors</option>

              </select>

            </div>
            <div className='resume_form_row'>
              <input type="text" placeholder='Enter Your Name' required className='resume_form_input' />
            </div>
            <div className='resume_form_row'>
              <input type="email" placeholder='Enter Your Email' required className='resume_form_input' />
            </div>
            <div className='resume_form_row'>
              <input type="number" placeholder='Enter Your Phone Number' required className='resume_form_input' />
            </div>
            {/* <div className='resume_form_row'>
              <label for="inputTag">
                Select Image <br />
                <input id="inputTag" type="file" onChange={e => setFilename(e.target.value)}  />
                <br />
                <span id="imageName">{filename}</span>
                
              </label>
            </div> */}
            <div className='resume_btn'>
              <input type="submit" className="resume_btn_inner" />

            </div>

          </form>
        </div ></div>
    </div>
  )
}

export default Careers