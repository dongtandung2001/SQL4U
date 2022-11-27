import React from "react";
import { Link, useParams } from "react-router-dom";
import { coursesCard } from "./data";
import * as courseService from "../../services/courseService";
import { withRouter } from "../withRouter";
import { useState } from "react";
import { useEffect } from "react";

const IndividualCourse = (props) => {
  // get id of course
  const { courseId } = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await courseService.getCourse(courseId);
      setData(data);
    };
    fetch();
  });

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
    <div className='container'>
      <h2>{data && data.name}</h2>
      {data &&
        data.tutorials.map((tutorial, index) => (
          <div>
            <Link
              style={{ textDecoration: "none" }}
              className='link-dark'
              to={`/catalog/${courseId}/tutorial/${tutorial._id}`}
            >
              <span style={{ marginRight: "10px" }}>{index + 1}.</span>
              {tutorial.title}
            </Link>
          </div>
        ))}
      <div className='tutorial-project'>
        <nav>
          <h3>Recommended Projects</h3>
          <Link to={`/catalog/${courseId}/project`}>
            <button className='catalog-button'>Recommend Project</button>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default withRouter(IndividualCourse);
