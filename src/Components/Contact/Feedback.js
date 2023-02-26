// import { Axios } from 'axios'
import React, { Fragment,useState,useEffect } from 'react'
import { createFeedback,clearErrors } from '../../Actions/FeedbackAction'
import Loader from '../../Components/layout/loader/loader'
import '../../CSS/feedBack.css'
import { useDispatch ,useSelector } from "react-redux";
import { toast } from 'react-toastify';
// import { CREATE_FEEDBACK_SUCCESS } from '../../constatnts/feedbackConstants';

const Feedback = () => {
   
    const dispatch = useDispatch();

    const {error, loading} = useSelector(
        (state) => state.feedback
    );
   
   
   

    const [fullName, setFullname]=useState("");
    const [mobileNo, setMobileno]=useState("");
    const [myEmail, setEmail]=useState("");
    const [suggestions, setSuggestions]=useState("");
    const [dob, setDOB]=useState("");
    const [work_exp, setWork_exp]=useState("");
    const [ltm, setLtm]=useState("");
    const [hs_exp, setHs_Exp]=useState("");
    const [company_exp, setCompany_exp]=useState("");
    const [ratings, setRatings]=useState("");
    

      const feedbackSubmit = (e) => {
         e.preventDefault();
        //  const {fullName,myEmail,mobileNo,suggestions} = feedback;
        toast.success('Feedback Sent Succesfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });

          
        const myForm = new FormData();
    
        myForm.set("fullName",fullName);
           myForm.set("myEmail", myEmail);
           myForm.set("mobileNo",mobileNo);
           myForm.set("suggestions",suggestions);
           myForm.set("work_exp",work_exp);
           myForm.set("dob",dob);
           myForm.set("ltm",ltm);
           myForm.set("hs_exp",hs_exp);
           myForm.set("company_exp",company_exp);
           myForm.set("ratings",ratings);
       
     
        dispatch(createFeedback(myForm));
      };
   
    useEffect(() => {
        if (error) {
            alert.error(error);
          dispatch(clearErrors());
        }
      
    },[dispatch,error])
  return (
    <Fragment>
    {loading ? (
        <Loader />
    ) :(
        <Fragment>
        <div className='feedBack'>
        
            <form className='feedBack_form'  encType="multipart/form-data" onSubmit={feedbackSubmit} >
            <h1>Send us your feedback!</h1>
               <div className='feedback_row_wrapper'> <div className='feedBack_formRow'>
                    <label htmlFor='myName' className='label_weight' >Full Name</label><br></br>
                    <input type="text"  placeholder='Full Name' name='fullName' value={fullName}  onChange={e => setFullname(e.target.value)} className="Feedback_input" required/>
                </div>
                <div className='feedBack_formRow'>
                    <label htmlFor='myEmail' className='label_weight' >Email Address</label><br></br>
                    <input type="email" placeholder='mts@gmail.com' name='myEmail' value={myEmail}  onChange={e => setEmail(e.target.value)} className="Feedback_input" required/>
                </div></div>
                <div className='feedback_row_wrapper'> <div className='feedBack_formRow'>
                    <label htmlFor='phone' className='label_weight'>Enter a number</label><br />
                    <input type="String" placeholder='Mobile' name='mobileNo' value={mobileNo}  onChange={e => setMobileno(e.target.value)} className="Feedback_input" required/>
                    </div> 
                <div className='feedBack_formRow'>
                    <label htmlFor='dob' className='label_weight'>Date of birth</label><br></br>
                    <input type="date" name='dob' value={dob}  onChange={e => setDOB(e.target.value).format('YYYY MM DD')}  className="Feedback_input" required/>
                  
                </div></div>
                <div className='feedBack_formRow'>
                    <p className='label_weight'>What is your Work Experience As Freelancers?</p>
                   <div className='radio_styling'><div className='radio_styling_inner'> <input type="radio" id="myExperience1"  value='Good'  checked={work_exp === 'Good'} onChange={e => setWork_exp(e.target.value)} required/>
                    <label htmlFor="myExperience1">Good</label><br /></div>
                    <div className='radio_styling_inner'><input type="radio" id="myExperience2" value='Bad' checked={ work_exp === 'Bad'} onChange={e => setWork_exp(e.target.value)} required/>
                    <label htmlFor="myExperience2">Bad</label><br /></div></div>
                </div>
                <div className='feedBack_formRow'>
                    <p className='label_weight'>You want to become our freelancer members for long time ?</p>
                    <div className='radio_styling'><div className='radio_styling_inner'> <input type="radio" id="aggrement1" value='Yes' checked={ltm === 'Yes'} onChange={e => setLtm(e.target.value)} required/>
                    <label htmlFor="aggrement1">Yes</label><br /></div>
                    <div className='radio_styling_inner'><input type="radio" id="aggrement2" value='NO' checked={ltm === 'No'} onChange={e =>setLtm(e.target.value)} required/>
                    <label htmlFor="aggrement2">No</label><br /></div></div>
                </div>
                <div className='feedBack_formRow'>
                    <p className='label_weight'>What is your Experience About M-Technosoft's Higher Staff (TL/Managers) ?</p>
                    <div className='radio_styling'>   <div className='radio_styling_inner'><input type="radio" id="rating1" value='Good' checked={hs_exp === 'Good'} onChange={e => setHs_Exp(e.target.value)} required/>
                    <label htmlFor="rating1">Good</label><br /></div>
                    <div className='radio_styling_inner'> <input type="radio" id="rating2"  value='Excellent' checked={hs_exp === 'Excellent'} onChange={e => setHs_Exp(e.target.value)} required/>
                    <label htmlFor="rating2">Excellent(Very Supportive)</label><br /></div>
                    <div className='radio_styling_inner'> <input type="radio" id="rating3"  value='Poor' checked={hs_exp === 'Poor'} onChange={e => setHs_Exp(e.target.value)} required/>
                    <label htmlFor="rating3">Poor(Not Supportive)</label><br /></div>
                    <div className='radio_styling_inner'> <input type="radio" id="rating4"  value='Bad' checked={hs_exp === 'Bad'} onChange={e => setHs_Exp(e.target.value)} required/>
                    <label htmlFor="rating4">Bad</label><br /></div></div>
                </div>
                <div className='feedBack_formRow'>
                    <p className='label_weight'>What is your Experience About Company Management ?</p>
                    <div className='radio_styling'>   <div className='radio_styling_inner'><input type="radio" id="myExperience" value='Very Good' checked={company_exp==='Very Good'} onChange={e=>setCompany_exp(e.target.value)} required/>
                    <label htmlFor="myExperience">Very Good</label><br /></div>
                    <div className='radio_styling_inner'> <input type="radio" id="myExperience" value='Very Excellent' checked={company_exp==='Very Excellent'} onChange={e=>setCompany_exp(e.target.value)} required/>
                    <label htmlFor="myExperience">Very Excellent</label><br /></div>
                    <div className='radio_styling_inner'> <input type="radio" id="myExperience" value='Very Bad' checked={company_exp==='Very Bad'} onChange={e=>setCompany_exp(e.target.value)} required/>
                    <label htmlFor="myExperience">Very Bad</label><br /></div></div>                </div>
                <div className='feedBack_formRow'>
                    <p className='label_weight'>Rate M - Technosoft Company From (5*)</p>
                    <div className='radio_styling'>   <div className='radio_styling_inner'><input type="radio" id="myExperience" value='*****' checked={ratings==='*****'} onChange={e => setRatings(e.target.value)} required/>
                    <label htmlFor="myExperience">*****</label><br /></div>
                    <div className='radio_styling_inner'><input type="radio" id="myExperience" value='****' checked={ratings==='****'} onChange={e => setRatings(e.target.value)} required />
                    <label htmlFor="myExperience">****</label><br /></div>
                    <div className='radio_styling_inner'> <input type="radio" id="myExperience" value='***' checked={ratings==='***'} onChange={e => setRatings(e.target.value)} required/>
                    <label htmlFor="myExperience">***</label><br /></div>
                    <div className='radio_styling_inner'><input type="radio" id="myExperience" value='**' checked={ratings==='**'} onChange={e => setRatings(e.target.value)} required/>
                    <label htmlFor="myExperience">**</label><br /></div>
                    <div className='radio_styling_inner'>  <input type="radio" id="myExperience" value='*' checked={ratings==='*'} onChange={e => setRatings(e.target.value)} required/>
                    <label htmlFor="myExperience">*</label><br /></div></div>
    </div>
               
                <div className='feedBack_formRow'>
                    <label htmlFor='suggestion' className='label_weight'>Any Suggestion / Feeback</label><br/>
                    <textarea  placeholder='Drop your suggestion' name='suggestions' value={suggestions}  onChange={e => setSuggestions(e.target.value)} className="feedback_textarea" required/>
                    
                    </div>
               {/* <div className='feedBack_formRow'>
                   <input type="checkbox"  id='declaration' />
                   <label htmlFor='declaration' className='label_weight'>I declare that the info I've provided is accurate & complete (Personal info. will be hidden.)</label>
                    </div> 
                    */}
                    <div className='feedback_btn'>
                        <input type="submit" value="Send Feedback" className='feedback_btnInner' />
                    </div> 

            </form>

        </div>
        </Fragment>
        )}
        </Fragment>
    )
}

export default Feedback