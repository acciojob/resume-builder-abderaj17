export const ADD_EDUCATION = 'ADD_EDUCATION';
export const DELETE_EDUCATION = 'DELETE_EDUCATION';
export const ADD_SKILL = 'ADD_SKILL';
export const DELETE_SKILL = 'DELETE_SKILL';
export const ADD_PROJECT = 'ADD_PROJECT';
export const DELETE_PROJECT = 'DELETE_PROJECT';
export const ADD_SOCIAL = 'ADD_SOCIAL';



export const updateProfile = (profile) => ({
    type: "UPDATE_PROFILE",
    payload: profile,
  });
  

export const addEducation = (data) =>({
    type: ADD_EDUCATION,
    payload: data,
});

export const deleteEducation = (id)=>({
    type: DELETE_EDUCATION,
    payload: id,
});

export const addSkill = (skill)=>({
    type: ADD_SKILL,
    payload: skill,
});

export const deleteSkill = (skill)=>({
    type: DELETE_SKILL,
     payload: skill,
});

export const addProject = (data) =>({
  type : ADD_PROJECT,
  payload: data,
})


export const deleteProject = (id) => ({
    type: DELETE_PROJECT,
    payload: id,
  });
  
  export const addSocial = (link) => ({
    type: ADD_SOCIAL,
    payload: link,
  });