import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { coursesCard } from "../learningHub/data";
import IndividualProject from "./IndividualProject";

import "./recommendedProjects.css";

export default function RecommendProject() {
  const [projectData, setProjectData] = useState([
    {
      title: "Project 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla erat, dictum quis sodales quis, lobortis ac arcu. Nunc ac vehicula velit, sit amet tincidunt metus. Phasellus vehicula id lectus non viverra. Aliquam tincidunt justo quis ante laoreet pellentesque. Fusce porta felis nec velit maximus maximus. Aenean varius erat est, vitae feugiat elit placerat id. Ut odio sapien, bibendum in mauris sit amet, blandit posuere tellus. Sed dapibus lacinia tortor et porta. Curabitur sit amet orci scelerisque, hendrerit ante ac, euismod sem. Donec elementum et quam at tristique.",
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

  const course = coursesCard.find((course) => course.id == courseId);
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
