import React,{useState,useEffect} from 'react'
import '../../CSS/contactForm.css'
import {  createContact,clearErrors} from '../../Actions/ContactAction'
import {useDispatch,useSelector} from "react-redux";
import Loader from '../layout/loader/loader'
import { toast } from 'react-toastify';


const ContactForm = () => {
    const dispatch = useDispatch();
    // const {expertises} = useSelector((state)=>state.expertises)
    const {error,loading} = useSelector(
        (state) => state.contact
    );
      
    const [contactName,setContactName] = useState('')
    const [contactemail,setcontactemail] = useState('')
    const [contactNo,setcontactNo] = useState('')
    const [country,setCountry] = useState('')
    const [message,setMessage] = useState('')
   

    
  const submitContact = (e) =>{
    e.preventDefault();
    toast.success('Thanks for contacting MTechno-Soft!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover:false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    const contactForm =  new FormData();
 
    contactForm.set("contactName",contactName)
    contactForm.set("contactemail",contactemail)
    contactForm.set("contactNo",contactNo)
    contactForm.set("country",country)
    contactForm.set("message",message)
     dispatch(createContact(contactForm));
   };

   useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
},[dispatch,error])
    return (
        <>
    {loading ? (
        <Loader />
    ) :(
        <div className='contactForm'>
             
            {/* <div className='contact_inner'> */}
          

            <form className='contact_formInner' onSubmit={submitContact}>
                <div className='form_row'><input type="text" name="contactName" required placeholder='Full Name' value={contactName} className='form_input' onChange={e=>setContactName(e.target.value)} /></div>
                <div className='form_row'><input type="email" name='contactemail' required placeholder='Email' value={contactemail} className='form_input' onChange={e=>setcontactemail(e.target.value)} /></div> 
                <div className='form_row'><input type="number" name="contactNo" required value={contactNo} placeholder='Phone Number' className='form_input' onChange={e=>setcontactNo(e.target.value)}/></div>
                <div className='form_row'><select name="country" id="country"  value={country} className='form_input' onChange={e=>setCountry(e.target.value)} style={{width:"980px"}}>
                    <option value="0">-- Select Country --</option>
                    <option  value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                    <option value="American Samoa">American Samoa</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                    <option value="Anguilla">Anguilla</option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="Antigua">Antigua</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Armenia">Armenia</option>
                    <option value="Aruba">Aruba</option>
                    <option value="Australia">Australia</option>
                    <option value="Austria">Austria</option>
                    <option value="Azerbaijani">Azerbaijani</option>
                    <option value="Bahamas">Bahamas</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Barbados">Barbados</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Netherlands">Belgium</option>
                    <option value="Belize">Belize</option>
                    <option value="Benin">Benin</option>
                    <option value="Bermuda">Bermuda</option>
                    <option value="Bhutan">Bhutan</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Bosnia-Hercegovina">Bosnia-Hercegovina</option>
                    <option value="Botswana">Botswana</option>
                    <option value="Bouvet Island">Bouvet Island</option>
                    <option value="Brazil">Brazil</option>
                    <option value="British IOT">British IOT</option>
                    <option value="Brunei Darussalam">Brunei Darussalam</option>
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="Burkina Faso">Burkina Faso</option>
                    <option value="Burundi">Burundi</option>
                    <option value="Cambodia">Cambodia</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Cape Verde">Cape Verde</option>
                    <option value="Cayman Islands">Cayman Islands</option>
                    <option value="Central African Rep">Central African Rep</option>
                    <option value="Chad">Chad</option>
                    <option value="Chile">Chile</option>
                    <option value="China">China</option>
                    <option value="Christmas Island">Christmas Island</option>
                    <option value="Cocos Islands">Cocos Islands</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Comoros">Comoros</option>
                    <option value="Congo">Congo</option>
                    <option value="Cook Islands">Cook Islands</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Croatia">Croatia</option>
                    <option value="Cyprus">Cyprus</option>
                    <option value="Czech Republic">Czech Republic</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Djibouti">Djibouti</option>
                    <option value="Dominica">Dominica</option>
                    <option value="Dominican Republic">Dominican Republic</option>
                    <option value="East Timor">East Timor</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Egypt">Egypt</option>
                    <option value="El Salvador">El Salvador</option>
                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                    <option value="Eritrea">Eritrea</option>
                    <option value="Estonia">Estonia</option>
                    <option value="Ethiopia">Ethiopia</option>
                    <option value="Faeroe Islands">Faeroe Islands</option>
                    <option value="Falkland Islands">Falkland Islands</option>
                    <option value="Fiji">Fiji</option>
                    <option value="Finland">Finland</option>
                    <option value="France">France</option>
                    <option value="French Guiana">French Guiana</option>
                    <option value="French Polynesia">French Polynesia</option>
                    <option value="French Southern">French Southern</option>
                    <option value="French Southern Ter">French Southern Ter</option>
                    <option value="Gabon">Gabon</option>
                    <option value="Gambia">Gambia</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Germany">Germany</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Gibraltar">Gibraltar</option>
                    <option value="Greece">Greece</option>
                    <option value="Greenland">Greenland</option>
                    <option value="Grenada">Grenada</option>
                    <option value="Guadeloupe">Guadeloupe</option>
                    <option value="Guam">Guam</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Guinea">Guinea</option>
                    <option value="Guinea-Bissau">Guinea-Bissau</option>
                    <option value="Guyana">Guyana</option>
                    <option value="Haiti">Haiti</option>
                    <option value="Heard">Heard</option>
                    <option value="Honduras">Honduras</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="Hungary">Hungary</option>
                    <option value="Iceland">Iceland</option>
                    <option value="India">India</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Israel">Israel</option>
                    <option value="Italy">Italy</option>
                    <option value="Ivory Coast">Ivory Coast</option>
                    <option value="Jamaica">Jamaica</option>
                    <option value="Japan">Japan</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Kazakhstan">Kazakhstan</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Kiribati">Kiribati</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                    <option value="Laos">Laos</option>
                    <option value="Latvia">Latvia</option>
                    <option value="Lebanon">Lebanon</option>
                    <option value="Lesotho">Lesotho</option>
                    <option value="Liberia">Liberia</option>
                    <option value="Liechtenstein">Liechtenstein</option>
                    <option value="Lithuania">Lithuania</option>
                    <option value="Luxembourg">Luxembourg</option>
                    <option value="Macau">Macau</option>
                    <option value="Macedonia">Macedonia</option>
                    <option value="Madagascar">Madagascar</option>
                    <option value="Malawi">Malawi</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Mali">Mali</option>
                    <option value="Malta">Malta</option>
                    <option value="Marshall Islands">Marshall Islands</option>
                    <option value="Martinique">Martinique</option>
                    <option value="Mauritania">Mauritania</option>
                    <option value="Mauritius">Mauritius</option>
                    <option value="Mayotte">Mayotte</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Micronesia">Micronesia</option>
                    <option value="MNP">MNP</option>
                    <option value="Moldova">Moldova</option>
                    <option value="Monaco">Monaco</option>
                    <option value="Mongolia">Mongolia</option>
                    <option value="Montserrat">Montserrat</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Mozambique">Mozambique</option>
                    <option value="Myanmar">Myanmar</option>
                    <option value="Namibia">Namibia</option>
                    <option value="Nauru">Nauru</option>
                    <option value="Nepal">Nepal</option>
                    <option value="NER">NER</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="Neutral Zone">Neutral Zone</option>
                    <option value="New Caledonia">New Caledonia</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Nicaragua">Nicaragua</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Niue">Niue</option>
                    <option value="Norfolk Island">Norfolk Island</option>
                    <option value="North Korea">North Korea</option>
                    <option value="Norway">Norway</option>
                    <option value="Oman">Oman</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Palau">Palau</option>
                    <option value="Panama">Panama</option>
                    <option value="Papua New Guinea">Papua New Guinea</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Peru">Peru</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Pitcairn">Pitcairn</option>
                    <option value="Poland">Poland</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Puerto Rico">Puerto Rico</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Reunion">Reunion</option>
                    <option value="Romania">Romania</option>
                    <option value="Russia">Russia</option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Saint Helena">Saint Helena</option>
                    <option value="Saint Lucia">Saint Lucia</option>
                    <option value="Saint Pierre">Saint Pierre</option>
                    <option value="Saint Vincent">Saint Vincent</option>
                    <option value="Samoa">Samoa</option>
                    <option value="San Marino">San Marino</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Scotland">Scotland</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Seychelles">Seychelles</option>
                    <option value="Sierra Leone">Sierra Leone</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Slovak Republic">Slovak Republic</option>
                    <option value="Slovenia">Slovenia</option>
                    <option value="Solomon Islands">Solomon Islands</option>
                    <option value="Somali Democratic">Somali Democratic</option>
                    <option value="South Africa">South Africa</option>
                    <option value="South Georgia">South Georgia</option>
                    <option value="South Korea">South Korea</option>
                    <option value="Spain">Spain</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="St. Kitts and Nevis">St. Kitts and Nevis</option>
                    <option value="STP">STP</option>
                    <option value="Suriname">Suriname</option>
                    <option value="Svalbard">Svalbard</option>
                    <option value="Swaziland">Swaziland</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Syria">Syria</option>
                    <option value="Taiwan">Taiwan</option>
                    <option value="Tajikistan">Tajikistan</option>
                    <option value="Tanzania">Tanzania</option>
                    <option value="TCA">TCA</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Toga">Toga</option>
                    <option value="Togolese">Togolese</option>
                    <option value="Tokelau">Tokelau</option>
                    <option value="Tongo">Tongo</option>
                    <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                    <option value="Tunisia">Tunisia</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Turkmenistan">Turkmenistan</option>
                    <option value="Tuvalu">Tuvalu</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="United Arab">United Arab</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Upper Volta">Upper Volta</option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="USSR(Former)">USSR(Former)</option>
                    <option value="Uzbekistan">Uzbekistan</option>
                    <option value="Vanuatu">Vanuatu</option>
                    <option value="Vatican City">Vatican City</option>
                    <option value="Venezuela">Venezuela</option>
                    <option value="VI, British">VI, British</option>
                    <option value="Viet Nam">Viet Nam</option>
                    <option value="Virgin Islands, USA">Virgin Islands, USA</option>
                    <option value="Western Sahara">Western Sahara</option>
                    <option value="WLF">WLF</option>
                    <option value="Yemen">Yemen</option>
                    <option value="Yugoslavia">Yugoslavia</option>
                    <option value="Zaire">Zaire</option>
                    <option value="Zambia">Zambia</option>
                    <option value="Zimbabwe">Zimbabwe</option>
                </select></div>
                <div className='form_row'>
                    <textarea name='message' placeholder='Drop your message here' required value={message}  className='form_input' id='message' onChange={e=>setMessage(e.target.value)}/>
                </div>
                <div className='contact_btn'>
                    <input type='submit' value="Submit" className='submit_btn'/>
                </div>


            </form>
        {/* </div> */}
        <div className='contact_map'>
            <p className='gMap'><iframe style={{filter: "invert(90%)"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.3107144020723!2d73.79038361484336!3d18.56002548738604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc295688a9a5b79%3A0x575c50ad6bbf51f0!2sMAHENDRA%20TECHNOSOFT%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1662550282369!5m2!1sen!2sin"    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='gmap' height="350px" width="998px" className='gMap'></iframe></p>
        </div>
        
        </div>)}</>
    )
}

export default ContactForm