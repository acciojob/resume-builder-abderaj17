
import React, { useState } from "react";
import Profile from "./Profile";

import './../styles/App.css';
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import Social from "./Social";
import Final from "./Final";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = ()=>{
    setCurrentPage((prev)=>Math.min(prev + 1, 6));
  };

  const handleBack = ()=>{
    setCurrentPage((prev)=> Math.max(prev-1, 1));
  };

  const renderPage = ()=>{
    switch(currentPage){
      case 1 :
        return <Profile handleNext={handleNext}/>;
      case 2:
        return <Education handleNext={handleNext}/>;
      case 3:
        return <Skills handleNext={handleNext}/>;
      case 4:
        return <Projects handleNext={handleNext}/>
      case 5: 
      return <Social handleNext={handleNext}/>;
      case 6:
        return <Final />;
      default :
      return <Profile />
    }
  }
  return (
    <div className="App">
      <h1>RESUME GENERATOR</h1>
      {renderPage()}

      <div className="navigation-buttons">
        {currentPage>1 && (
          <button id="back" onClick={handleBack}>
            Back
          </button>
        )}
        {currentPage < 6 ?(
          <button id="save_continue" onClick={handleNext}>
            Save and Continue
          </button>
        ):(
          <button id="next" onClick={()=> alert("Resume Completed!")}>
            Preview Resume
          </button>
        )}
        </div> 
    </div>
  )
}

export default App
