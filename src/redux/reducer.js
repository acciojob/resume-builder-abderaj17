import Education from '../components/Education';
import {
    ADD_EDUCATION,
    DELETE_EDUCATION,
    ADD_SKILL,
    DELETE_SKILL,
    ADD_PROJECT,
    DELETE_PROJECT,
    ADD_SOCIAL,
} from '../redux/action';


const initialState = {
    profile: {},
    education : [],
     skills: [],
     projects: [],
     socials: [],
};

const reducer = (state = initialState,action)=>{
    switch(action.type){
        case ADD_EDUCATION:
            return {...state, education: [...state.education, action.payload]};

        case DELETE_EDUCATION:
            return {
                ...state,
                education: state.education.filter((_, i)=> i !== action.payload),
            } ;
        case ADD_SKILL:
            return {...state, skills:[...state.skills, action.payload]};
        case DELETE_SKILL:
            return{
                ...state, 
                skills: state.skills.filter((_, i)=> i!== action.payload),
            } ;
        case DELETE_PROJECT:
            return {
                ...state,
                projects: state.projects.filter((_, i)=> i !== action.payload),
            };
        case ADD_SOCIAL:
            return {...state, socials: [...state.socials, action.payload]};
        default:
            return state;  
    }

};

export default reducer;