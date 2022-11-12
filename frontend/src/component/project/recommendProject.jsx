import React from "react";
import IndividualProject from './IndividualProject';
import './recommendedProjects.css';
import { data } from './projects';

export default function RecommendProject() {
  const cards = data.map((item, index) => {
    return (
      <div key={index}>
        <IndividualProject
          count={index + 1}
          title={item.title}
          content={item.content}
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

