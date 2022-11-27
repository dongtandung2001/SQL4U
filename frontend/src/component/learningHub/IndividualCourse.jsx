import React from "react";
import { Link, useParams } from "react-router-dom";
import { coursesCard } from "./data";
import * as courseService from "../../services/courseService";
import { withRouter } from "../withRouter";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as tutorialService from "../../services/tutorialService";

const IndividualCourse = (props) => {
  // get id of course
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await courseService.getCourse(courseId);
      setData(data);
    };
    fetch();
  }, []);

  // get course information from database
  // const { data: course } = await courseService.getCourse(courseId);
  // const courses = await courseService.getCourse(courseId);
  // const course = coursesCard.find((course) => course.id == courseId);
  // (course.tutorials);
  // render tutorials in this course
  // const tutorialList = course.tutorials.map((tutorial, index) => {
  //   (tutorial);
  //   return (
  //       <Link
  //         style={{ textDecoration: "none" }}
  //         className='link-dark'
  //         to={`/catalog/${courseId}/tutorial/${tutorial._id}`}
  //       >
  //         <span style={{ marginRight: "10px" }}>{index + 1}.</span>
  //         {tutorial.title}
  //       </Link>
  //   );
  // });
  // ("list", course.tutorials);
  return (
    <div className="container">
      <button
        onClick={() => {
          navigate(`/catalog/${courseId}/tutorial/add/new`);
        }}
        className="btn btn-primary m-auto"
      >
        New Tutorial
      </button>
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
          </div>
        ))}
      <div className="tutorial-project">
        <nav>
          <h3>Recommended Projects</h3>
          <Link to={`/catalog/${courseId}/project`}>
            <button className="catalog-button">Recommend Project</button>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default withRouter(IndividualCourse);
