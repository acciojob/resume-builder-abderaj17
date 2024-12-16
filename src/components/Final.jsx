import React from 'react'
import { useSelector } from 'react-redux'
import Social from './Social';

const Final = () => {
    const { profile, education, skills, projects, socials } = useSelector(
        (state) => state
      );
    
      return (
        <div>
          <h1>Final Resume</h1>
          <h2>{profile.fname} {profile.lname}</h2>
          <p>Address: {profile.address}</p>
          <p>Phone: {profile.phone}</p>
    
          <h3>Education</h3>
          <ul>
            {education.map((edu, index) => (
              <li key={index}>{edu.courseName} - {edu.collage}</li>
            ))}
          </ul>
    
          <h3>Skills</h3>
          <ul>{skills.map((skill, index) => <li key={index}>{skill}</li>)}</ul>
    
          <h3>Projects</h3>
          <ul>
            {projects.map((proj, index) => (
              <li key={index}>{proj.projectName} - {proj.techStack}</li>
            ))}
          </ul>
    
          <h3>Social Links</h3>
          <ul>
            {socials.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>
      );
    };

export default Final;