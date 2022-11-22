import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

import { coursesCard } from "../learningHub/data";

import IndividualProject from "./IndividualProject";

import auth from "../../services/authService";

import "./recommendedProjects.css";

export default function RecommendProject() {

  const { courseId } = useParams();
  const course = coursesCard.find((course) => course.id == courseId);
  const projects = course.projects;

  // get user to determine if its admin
  const user = auth.getCurrentUser();

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

  const cards = projects.map((item) => {
    return (
      <div key={item.id}>
        <IndividualProject
          id={item.id}
          title={item.title}
          // handleDelete={handleDelete}
        />
      </div>
    );
  });

  return (
    <div className="container">
      <h2>{course.coursesName}</h2>
      <div>
        {cards}
        {user && user.admin && (
          <Link to={"/project/add/new"}>
            <button className="btn btn-primary">Add</button>
          </Link>
        )}
      </div>
    </div>
  );
}
