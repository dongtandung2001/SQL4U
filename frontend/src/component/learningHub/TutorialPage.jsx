import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./learningHub.css";

// import { tutorial } from "./ tutorial";

import { useState, useEffect } from "react";
import * as tutorialService from "../../services/tutorialService";
import * as authService from "../../services/authService";

export default function TutorialPage() {
  // const {state} = useLocation();
  const { courseId, tutorialId } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  // get user info
  const user = authService.getCurrentUser();
  useEffect(() => {
    const fetch = async () => {
      const { data } = await tutorialService.getTutorial(tutorialId);
      setData(data);
    };
    fetch();
  }, [tutorialId]);
  //location.filter((course) => course.topic === "basic")
  return (
    <div className="container">
      <button
        onClick={() => {
          navigate(`/catalog/${courseId}`);
        }}
        className="btn btn-primary me-2"
      >
        Go Back
      </button>
      {user && user.admin && (
        <button
          onClick={() => {
            navigate(`/catalog/${courseId}/tutorial/add/${tutorialId}`);
          }}
          className="btn btn-primary"
        >
          Edit
        </button>
      )}
      <div className="tutorial-title">{data && data.title}</div>
      <div>
        {data &&
          data.contents.map((content) => (
            <div key={content._id}>
              <li className="tutorial-title">
                <h5 className="tutorial-header">
                  {content.header}{" "}
                  <span>
                    {user && user.admin && (
                      <button
                        onClick={async () => {
                          await tutorialService.deleteContent(
                            tutorialId,
                            content._id
                          );
                          window.location = `/catalog/${courseId}/tutorial/${tutorialId}`;
                        }}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    )}
                  </span>
                </h5>
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
