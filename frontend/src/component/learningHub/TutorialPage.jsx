import React from "react";
import { useLocation, useParams } from "react-router-dom";
import "./learningHub.css";

// import { tutorial } from "./ tutorial";
import { tutorial } from "./tutorial1";
import { useState, useEffect } from "react";
import * as tutorialService from "../../services/tutorialService";

export default function TutorialPage() {
  // const {state} = useLocation();
  const { tutorialId } = useParams();
  console.log("hi", tutorialId);

  const [data, setData] = useState(null);
  useEffect(() => {
    const fetch = async () => {
      const { data } = await tutorialService.getTutorial(tutorialId);
      setData(data);
    };
    fetch();
  });
  console.log("tutorial", data);
  //location.filter((course) => course.topic === "basic")
  return (
    <div className="container">
      <div className="tutorial-title">{data && data.title}</div>
      <div>
        {data &&
          data.contents.map((contents, index) => (
            <li key={index} className="tutorial-title">
              <h5 className="tutorial-header">{contents.header}</h5>
              <div className="tutorial-detail">
                {contents.detail.split("\n").map((str) => (
                  <p>{str}</p>
                ))}
              </div>
            </li>
          ))}
      </div>
    </div>
  );
}
