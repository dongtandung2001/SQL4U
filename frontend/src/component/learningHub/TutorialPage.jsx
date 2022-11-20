import React from "react";
import { useLocation, useParams } from "react-router-dom";
import "./learningHub.css";

import { tutorial } from "./ tutorial";

export default function TutorialPage() {
  // const {state} = useLocation();
  const { tutorialId } = useParams();
  // console.log('hi',tutorialId);
  //location.filter((course) => course.topic === "basic")
  const tutorials = tutorial.find((content) => content.id == tutorialId);
  return (
    <div>
      <h1 className="tutorial-title">{tutorials.title}</h1>
      {/* <ul className="tutorial-title">{tutorials[0].content}</ul> */}
      <div>
        {tutorials.content.map((contents, index) => (
          <li key={index} className="tutorial-title">
            {contents}
          </li>
        ))}
      </div>
    </div>
  );
}
