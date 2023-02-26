import React, { useEffect } from 'react'
import Adminsidebar from './Adminsidebar'
import { getContacts } from '../../Actions/ContactAction';
import { useDispatch,useSelector} from 'react-redux';
import '../../CSS/admincontact.css'
const AdminContact = () => {

    const dispatch = useDispatch();
  const { error, contacts } = useSelector((state) => state.contacts);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  return (
    <div className='admincontact'>
        <Adminsidebar />
        <div className='admincontact_content'>
              <h1>Contact List</h1>
        <table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Mobile Number</th>
      <th>Country</th>
      <th>Message</th>
      
    </tr>
  </thead>
 
   
  <tbody>
              {contacts &&
                contacts.map((contact) => (
                  <tr>
                    <td>{contact.contactName}</td>
                    <td>{contact.contactemail}</td>
                    <td>{contact.contactNo}</td>
                    <td>{contact.country}</td>
                    <td>{contact.message}</td>
                  
                    
                  </tr>
                ))}
            </tbody>

</table>
        </div></div>
  )
}

export default AdminContact