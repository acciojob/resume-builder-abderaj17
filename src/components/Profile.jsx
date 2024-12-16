import React, { useState } from 'react'
import {updateProfile} from '../redux/action';
import { useDispatch } from 'react-redux';
const Profile = () => {
    const dispatch = useDispatch();
    const [profile, setProfile] = useState({
        fname: "",
        lname: "",
        phone: "",
        address: "",
        url:"",
        });

        const handleChange = (e)=>{
            setProfile({...Profile, [e.target.name]: e.target.value});
        };

        const handleSave = ()=>{
            dispatch(updateProfile(profile));
        };
  return (
    <div>
   <h4>Add your profile details</h4>
   <label htmlFor="">First Name:</label>
   <input type='text' name='fname' onChange={handleChange}/>

   <label htmlFor="">Last Name</label>
   <input type="text" name='lname' onChange={handleChange} />

   <label htmlFor="">Phone Number</label>
   <input type="text" name='phone' onChange={handleChange} />

   <label htmlFor="">Address:</label>
   <input type="text" name='address' onChange={handleChange} />

   <label htmlFor="">Image URL:</label>
   <input type="text " name='url' onChange={handleSave}/>

   <button id="next" onClick={handleNext}>Next</button>


   <button id='save_continue' onClick={handleSave}>Save and Continue</button>
    </div>
  )
}

export default Profile