import React, { useState } from "react";
import IndividualProject from './IndividualProject';
import './recommendedProjects.css';

export default function RecommendProject() {
  const [projectData, setProjectData] = useState([{title: 'Project 1', content: 'Hello'},{title: 'Project 2', content: 'Hello'},{title: 'Project 3', content: 'Hello'}]);
  let cards = [];

  /*
  Function delete
  Delete a specific item in an array of data
  */
  const handleDelete = (id, e) => {
    e.preventDefault();
    let currentData = projectData;
    if (id > -1) {
      currentData.splice(id,1);
    }
    setProjectData([...currentData]);
  }

  cards = projectData.map((item, index) => {
    return (
      <div key={index}>
        <IndividualProject
          id={index}
          title={item.title}
          content={item.content}
          handleDelete ={handleDelete}
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

