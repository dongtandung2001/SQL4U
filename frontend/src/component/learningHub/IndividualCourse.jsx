import React from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import * as courseService from "../../services/courseService";
import { withRouter } from "../withRouter";
import { useState } from "react";
import { useEffect } from "react";
import * as tutorialService from "../../services/tutorialService";
import * as authService from "../../services/authService";

const IndividualCourse = (props) => {
  // get id of course
  const { courseId } = useParams();
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await courseService.getCourse(courseId);
      setData(data);
    };
    fetch();
  }, [courseId]);

  const user = authService.getCurrentUser();

  const handleNavigateBack = () => {
    navigate(`/catalog`);
    
  }
  return (
    <div className="container">
      <button className="btn btn-primary me-2" onClick={handleNavigateBack}>Go back</button>
      {user && user.admin && (
        <button
          onClick={() => {
            navigate(`/catalog/${courseId}/tutorial/add/new`);
          }}
          className="btn btn-primary m-auto"
        >
          New Tutorial
        </button>
      )}
      <h2>{data && data.name}</h2>
      {data &&
        data.tutorials.map((tutorial, index) => (
          <div key={tutorial._id}>
            <Link
              style={{ textDecoration: "none" }}
              className="link-dark"
              to={`/catalog/${courseId}/tutorial/${tutorial._id}`}
            >
              <span style={{ marginRight: "10px" }}>{index + 1}.</span>
              {tutorial.title}
            </Link>
            {user && user.admin && (
              <button
                onClick={async () => {
                  // call delete
                  // delete tutorial ref in course
                  await courseService.deleteTutorial(courseId, tutorial._id);
                  // delete tutorial in database
                  await tutorialService.deleteTutorial(tutorial._id);
                  window.location = `/catalog/${courseId}`;
                }}
                className="btn btn-danger"
              >
                Delete
              </button>
            )}
          </div>
        ))}
      <div className="tutorial-project">
        <nav>
          <h3 style={{color: "#000"}}>We Picked Some Projects For You To Practice Your Skills</h3>
          <Link to={`/catalog/${courseId}/project`}>
            <button className="btn btn-md btn-outline-primary">Let's Go {'>>'}</button>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default withRouter(IndividualCourse);
