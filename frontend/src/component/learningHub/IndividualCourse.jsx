import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { coursesCard } from "./data";
import {tutorial} from "./tutorial1";
import {Course} from "./data1";

export default function IndividualCourse() {
  // get id of course
  const { courseId } = useParams();
  // get course information from database
  const course = Course.find((course) => course._id == courseId);
  const courseName = course.name;
  // render tutorials in this course
  const tutorialList = course.tutorial.map((tutorial, index) => {
    return (
      <div key={tutorial._id}>
        <Link
          style={{ textDecoration: "none" }}
          className="link-dark"
          to={`/catalog/${courseId}/tutorial/${tutorial._id}`}
        >
          <span style={{ marginRight: "10px" }}>{index + 1}.</span>
          {tutorial.title}
        </Link>
      </div>
    );
  });
  return (
    <div className="container">
      <h2>{courseName}</h2>
      {tutorialList}
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
}
