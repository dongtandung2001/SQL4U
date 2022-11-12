import React from "react";
import IndividualProject from './IndividualProject';
import './recommendedProjects.css';
import {data} from './projects';

export default function RecommendProject() {
  const cards = data.map( (item, index) => {
    const handleOnclick = (e) => {
      e.preventDefault();
      console.log("Clicked Project", item.title);
    }

    return (
      <div key={index}onClick={handleOnclick}>
        <IndividualProject 
          
          count ={ index+1}
          title={item.title}
        />
      </div>
     
    )
  });

  return (
    <div className="projects-container">
      {cards}
    </div>
  );
}

