import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { coursesCard } from "../learningHub/data";

import IndividualProject from "./IndividualProject";

import auth from "../../services/authService";
import * as courseService from "../../services/courseService";
import "./recommendedProjects.css";

export default function RecommendProject() {
  const [projectList, setProjectList] = useState([]);
  const [course, setCourse] = useState({});
  const { courseId } = useParams();
  const user = auth.getCurrentUser();
  
  useEffect( () => {
    //Fetch course using course ID
    const getCourseList = async () => {
      const { data } = await courseService.getCourse(courseId);
      setCourse(data);
      setProjectList(data.projects);
    }
    getCourseList();
  });
  // get user to determine if its admin
  

  /*
  Function delete
  Delete a specific item in an array of data
  */
  // const handleDelete = (id, e) => {
  //   e.preventDefault();
  //   let currentData = projectData;
  //   if (id > -1) {
  //     currentData.splice(id, 1);
  //   }
  //   setProjectData([...currentData]);
  // };

  const cards = projectList.map((item) => {
    return (
      <div key={item._id}>
        <IndividualProject
          id={item._id}
          title={item.title}
          // handleDelete={handleDelete}
        />
      </div>
    );
  });

  return (
    <div className="container">
      <h2>{course.name}</h2>
      <div>
        {cards}
        {user && user.admin && (
          <Link to={`/catalog/${courseId}/project/add/new`}>
            <button className="btn btn-primary">Add</button>
          </Link>
        )}
      </div>
    </div>
  );
}
