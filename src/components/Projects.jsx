import React, { useState } from 'react'
import { addProject, deleteProject } from '../redux/action'
import { useDispatch } from 'react-redux'
const Projects = () => {
    const dispatch = useDispatch();
    const [project, setProject] = useState({
        projectName : "",
        teckStack: "",
        description: "",
    });

    const handleChange = (e)=>{
        setProject({...project, [e.target.name]:e.target.value});
    }
    const handleNext = () =>{
        alert("Proceeding to the nextstep...");
    }
  return (
    <div>
      <h2>Projects Section</h2>
      <label htmlFor="">Project Name:</label>
      <input type="text" name='projectName' onChange={handleChange} />

      <label htmlFor="">Tech Stack:</label>
      <input type="text" name='teckStack' onChange={handleChange} />

      <button id='add_project' onClick={()=> dispatch(addProject(project))}>Add Project</button>

      <button id='delete' onClick={()=> dispatch(deleteProject(project))}>
        Delete Project
      </button>
      <button id="next" onClick={handleNext}>Next</button>

    </div>
  )
};

export default Projects