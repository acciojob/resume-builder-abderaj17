import React, { useState } from 'react'
import { addSocial } from '../redux/action'
import { useDispatch } from 'react-redux'
const Social = ({handleNext}) => {
    const dispatch = useDispatch();
    const [social, setSocial] = useState("");

    // const handleNext = ()=>{
    //     alert("Proceeding to the next step...");
    // }

  return (
    <div>
     <h2>Social Media Links</h2>
     <input type="text" placeholder='Add Social Link' 
     name='Social' 
     value={social}
     onChange={(e)=> setSocial(e.target.value)}
     />
     <button id='add_social' onClick={()=> dispatch(addSocial(social))}>
        Add Social Link
     </button>
     <button id="next" onClick={handleNext}>Next</button>

    </div>
  )
}

export default Social