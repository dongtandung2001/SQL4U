import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { coursesCard } from "./data";

export default function IndividualCourse() {
  // get id of course
  const { courseId } = useParams();
  // get course information from database
  const course = coursesCard.find((course) => course.id == courseId);
  const courseName = course.coursesName;
  // render tutorials in this course
  const tutorialList = course.tutorial.map((tutorial, index) => {
    return (
      <div key={tutorial.id}>
        <Link
          style={{ textDecoration: "none" }}
          className="link-dark"
          to={`/catalog/${courseId}/tutorial/${tutorial.id}`}
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
