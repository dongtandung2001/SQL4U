import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { coursesCard } from "../learningHub/data";
import IndividualProject from "./IndividualProject";

import "./recommendedProjects.css";

export default function RecommendProject() {
  const [projectData, setProjectData] = useState([
    {
      title: "Project 1111",
      content:
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Neque vitae tempus quam pellentesque nec nam aliquam sem et. Donec massa sapien faucibus et molestie ac. Ac ut consequat semper viverra nam libero justo laoreet. 
      Lorem mollis aliquam ut porttitor leo a. Semper quis lectus nulla at volutpat diam. Adipiscing elit ut aliquam purus sit amet luctus. Dui ut ornare lectus sit.`,
    },
    {
      title: "Project 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla erat, dictum quis sodales quis, lobortis ac arcu. Nunc ac vehicula velit, sit amet tincidunt metus. Phasellus vehicula id lectus non viverra. Aliquam tincidunt justo quis ante laoreet pellentesque. Fusce porta felis nec velit maximus maximus. Aenean varius erat est, vitae feugiat elit placerat id. Ut odio sapien, bibendum in mauris sit amet, blandit posuere tellus. Sed dapibus lacinia tortor et porta. Curabitur sit amet orci scelerisque, hendrerit ante ac, euismod sem. Donec elementum et quam at tristique.",
    },
    {
      title: "Project 3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla erat, dictum quis sodales quis, lobortis ac arcu. Nunc ac vehicula velit, sit amet tincidunt metus. Phasellus vehicula id lectus non viverra. Aliquam tincidunt justo quis ante laoreet pellentesque. Fusce porta felis nec velit maximus maximus. Aenean varius erat est, vitae feugiat elit placerat id. Ut odio sapien, bibendum in mauris sit amet, blandit posuere tellus. Sed dapibus lacinia tortor et porta. Curabitur sit amet orci scelerisque, hendrerit ante ac, euismod sem. Donec elementum et quam at tristique.",
    },
    {
      title: "Project 4",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla erat, dictum quis sodales quis, lobortis ac arcu. Nunc ac vehicula velit, sit amet tincidunt metus. Phasellus vehicula id lectus non viverra. Aliquam tincidunt justo quis ante laoreet pellentesque. Fusce porta felis nec velit maximus maximus. Aenean varius erat est, vitae feugiat elit placerat id. Ut odio sapien, bibendum in mauris sit amet, blandit posuere tellus. Sed dapibus lacinia tortor et porta. Curabitur sit amet orci scelerisque, hendrerit ante ac, euismod sem. Donec elementum et quam at tristique.",
    },
    {
      title: "Project 5",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla erat, dictum quis sodales quis, lobortis ac arcu. Nunc ac vehicula velit, sit amet tincidunt metus. Phasellus vehicula id lectus non viverra. Aliquam tincidunt justo quis ante laoreet pellentesque. Fusce porta felis nec velit maximus maximus. Aenean varius erat est, vitae feugiat elit placerat id. Ut odio sapien, bibendum in mauris sit amet, blandit posuere tellus. Sed dapibus lacinia tortor et porta. Curabitur sit amet orci scelerisque, hendrerit ante ac, euismod sem. Donec elementum et quam at tristique.",
    },
    {
      title: "Project 6",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla erat, dictum quis sodales quis, lobortis ac arcu. Nunc ac vehicula velit, sit amet tincidunt metus. Phasellus vehicula id lectus non viverra. Aliquam tincidunt justo quis ante laoreet pellentesque. Fusce porta felis nec velit maximus maximus. Aenean varius erat est, vitae feugiat elit placerat id. Ut odio sapien, bibendum in mauris sit amet, blandit posuere tellus. Sed dapibus lacinia tortor et porta. Curabitur sit amet orci scelerisque, hendrerit ante ac, euismod sem. Donec elementum et quam at tristique.",
    },
    {
      title: "Project 7",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla erat, dictum quis sodales quis, lobortis ac arcu. Nunc ac vehicula velit, sit amet tincidunt metus. Phasellus vehicula id lectus non viverra. Aliquam tincidunt justo quis ante laoreet pellentesque. Fusce porta felis nec velit maximus maximus. Aenean varius erat est, vitae feugiat elit placerat id. Ut odio sapien, bibendum in mauris sit amet, blandit posuere tellus. Sed dapibus lacinia tortor et porta. Curabitur sit amet orci scelerisque, hendrerit ante ac, euismod sem. Donec elementum et quam at tristique.",
    },
  ]);

  const { courseId } = useParams();

  const course = coursesCard.find((course) => course.id === courseId);
  const projects = course.projects;

  /*
  Function delete
  Delete a specific item in an array of data
  */
  const handleDelete = (id, e) => {
    e.preventDefault();
    let currentData = projectData;
    if (id > -1) {
      currentData.splice(id, 1);
    }
    setProjectData([...currentData]);
  };

  const cards = projects.map((item) => {
    return (
      <div key={item.id}>
        <IndividualProject
          id={item.id}
          title={item.title}
          handleDelete={handleDelete}
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
