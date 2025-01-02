import React, { useState } from 'react'
import { addSkill, deleteSkill } from '../redux/action'
import { useDispatch } from 'react-redux'

const Skills = () => {
    const dispatch = useDispatch();
  const [skill, setSkill] = useState("");

  const handleNext = ()=>{
    alert("Proceeding to the next step...");
  }
  return (
    <div>
      <h2>Skills Section</h2>
      <input
        type="text"
        placeholder="Add Skill"
      name='skill'
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />
      <button id="add_skill" onClick={() => dispatch(addSkill(skill))}>
        Add Skill
      </button>
      <button id="delete_skill" onClick={() => dispatch(deleteSkill(skill))}>
        Delete Skill
      </button>
      <button id="next" onClick={handleNext}>Next</button>

    </div>
  );
};


export default Skills;