import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addEducation, deleteEducation } from '../redux/action'
const Education = () => {
 
    const [form, setForm] = useState({
        courseName: "",
        completionYear: "",
        college: "",
        percentage: "",
      });
    
      const education = useSelector((state) => state.education);
      const dispatch = useDispatch();
    
      const handleAdd = () => {
        dispatch(addEducation(form));
        setForm({ courseName: "", completionYear: "", college: "", percentage: "" });
      };
      const handleNext = ()=>{
    alert("Proceeding to the next step...");
      }
    
      return (
        <div>
          <h2>Add your Education Details</h2>
          <input
            name="courseName"
            placeholder="Course Name"
            value={form.courseName}
            onChange={(e) => setForm({ ...form, courseName: e.target.value })}
          />
          <input
            name="completionYear"
            placeholder="Completion Year"
            value={form.completionYear}
            onChange={(e) => setForm({ ...form, completionYear: e.target.value })}
          />
          <input
            name="college"
            placeholder="College"
            value={form.college}
            onChange={(e) => setForm({ ...form, college: e.target.value })}
          />
          <input
            name="percentage"
            placeholder="Percentage"
            value={form.percentage}
            onChange={(e) => setForm({ ...form, percentage: e.target.value })}
          />
          <button id="add_education" onClick={handleAdd}>
            Add Education
          </button>
    
          <ul>
            {education.map((edu, index) => (
              <li key={index}>
                {edu.courseName} - {edu.college}
                <button id="delete" onClick={() => dispatch(deleteEducation(index))}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <button id="next" onClick={handleNext}>Next</button>

        </div>
      );
    };

export default Education