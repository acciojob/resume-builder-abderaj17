import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProject, deleteProject } from "../redux/action";

const Projects = ({ handleNext }) => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects);

  const [project, setProject] = useState({
    projectName: "",
    teckStack: "",
    description: "",
  });

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleAddProject = () => {
    if (project.projectName.trim() && project.teckStack.trim()) {
      dispatch(addProject(project));
      setProject({ projectName: "", teckStack: "", description: "" });
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <div>
      <h2 data-testid="projects-heading">Add your Mini Projects</h2>

      <label>Project Name:</label>
      <input
        type="text"
        name="projectName"
        placeholder="Project Name"
        data-testid="project-name-input"
        value={project.projectName}
        onChange={handleChange}
      />

      <label>Tech Stack:</label>
      <input
        type="text"
        name="teckStack"
        placeholder="Tech Stack"
        data-testid="tech-stack-input"
        value={project.teckStack}
        onChange={handleChange}
      />

      <button id="add_project" onClick={handleAddProject}>
        Add Project
      </button>

      <ul>
        {projects.map((proj, index) => (
          <li key={index}>
            {proj.projectName} - {proj.teckStack}
            <button id="delete" onClick={() => dispatch(deleteProject(index))}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      <button id="next" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Projects;
