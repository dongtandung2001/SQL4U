import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import "./learningHub.css";

// import { tutorial } from "./ tutorial";
import { tutorial } from "./tutorial1";
import { useState, useEffect } from "react";
import * as tutorialService from "../../services/tutorialService";

export default function TutorialPage() {
  // const {state} = useLocation();
  const { courseId, tutorialId } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetch = async () => {
      const { data } = await tutorialService.getTutorial(tutorialId);
      setData(data);
    };
    fetch();
  }, []);
  //location.filter((course) => course.topic === "basic")
  return (
    <div className="container">
      <button
        onClick={() => {
          navigate(`/catalog/${courseId}/tutorial/add/${tutorialId}`);
        }}
        className="btn btn-primary"
      >
        Edit
      </button>
      <div className="tutorial-title">{data && data.title}</div>
      <div>
        {data &&
          data.contents.map((content) => (
            <div key={content._id}>
              <li className="tutorial-title">
                <h5 className="tutorial-header">{content.header}</h5>
                <div className="tutorial-detail">
                  {content.detail.split("\n").map((str) => (
                    <p key={Math.floor(Math.random() * 100)}>{str}</p>
                  ))}
                </div>
              </li>
            </div>
          ))}
      </div>
    </div>
  );
}
