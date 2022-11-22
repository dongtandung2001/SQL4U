import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { coursesCard } from "../learningHub/data";
import IndividualProject from "./IndividualProject";
import * as projectService from '../../services/projectService';
import "./recommendedProjects.css";

export default function RecommendProject() {

  const { courseId } = useParams();
  const course = coursesCard.find((course) => course.id == courseId);
  const projects = course.projects;

  // const  projectList = async () => {
  //   const {data} = await projectService.getProjects();
  //   console.log('hi', {...data});
  // }
  // projectList();
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
      <div >
        {cards}
      </div>
      
    </div>
  );
}
