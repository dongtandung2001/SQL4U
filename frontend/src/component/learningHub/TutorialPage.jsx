import React from "react";
import { useLocation, useParams } from "react-router-dom";
import "./learningHub.css";

// import { tutorial } from "./ tutorial";
import { tutorial } from "./tutorial1";

export default function TutorialPage() {
  // const {state} = useLocation();
  const { tutorialId } = useParams();
  console.log('hi',tutorialId);
  //location.filter((course) => course.topic === "basic")
  const tutorials = tutorial.find((content) => content._id == tutorialId);
  return (
    <div>
      <div className="tutorial-title">{tutorials.title}</div>
      <div>
      {tutorials.content.map((contents, index) => (
          <li key={index} className="tutorial-title">
            <h5 className="tutorial-header">{contents.header}</h5>
            <div className="tutorial-detail">{contents.detail.split('\n').map(str => <p>{str}</p>)}</div>
          </li>
        ))
        }
      </div>
    </div>
  );
}
