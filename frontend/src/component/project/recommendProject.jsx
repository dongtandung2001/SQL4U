import React, { useState } from "react";
import IndividualProject from './IndividualProject';
import { useLocation } from 'react-router-dom';
import './recommendedProjects.css';

export default function RecommendProject() {
  const [projectData, setProjectData] = 
    useState([{title: 'Project 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla erat, dictum quis sodales quis, lobortis ac arcu. Nunc ac vehicula velit, sit amet tincidunt metus. Phasellus vehicula id lectus non viverra. Aliquam tincidunt justo quis ante laoreet pellentesque. Fusce porta felis nec velit maximus maximus. Aenean varius erat est, vitae feugiat elit placerat id. Ut odio sapien, bibendum in mauris sit amet, blandit posuere tellus. Sed dapibus lacinia tortor et porta. Curabitur sit amet orci scelerisque, hendrerit ante ac, euismod sem. Donec elementum et quam at tristique.'},
              {title: 'Project 2', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla erat, dictum quis sodales quis, lobortis ac arcu. Nunc ac vehicula velit, sit amet tincidunt metus. Phasellus vehicula id lectus non viverra. Aliquam tincidunt justo quis ante laoreet pellentesque. Fusce porta felis nec velit maximus maximus. Aenean varius erat est, vitae feugiat elit placerat id. Ut odio sapien, bibendum in mauris sit amet, blandit posuere tellus. Sed dapibus lacinia tortor et porta. Curabitur sit amet orci scelerisque, hendrerit ante ac, euismod sem. Donec elementum et quam at tristique.'},
              {title: 'Project 3', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla erat, dictum quis sodales quis, lobortis ac arcu. Nunc ac vehicula velit, sit amet tincidunt metus. Phasellus vehicula id lectus non viverra. Aliquam tincidunt justo quis ante laoreet pellentesque. Fusce porta felis nec velit maximus maximus. Aenean varius erat est, vitae feugiat elit placerat id. Ut odio sapien, bibendum in mauris sit amet, blandit posuere tellus. Sed dapibus lacinia tortor et porta. Curabitur sit amet orci scelerisque, hendrerit ante ac, euismod sem. Donec elementum et quam at tristique.'},
              {title: 'Project 4', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla erat, dictum quis sodales quis, lobortis ac arcu. Nunc ac vehicula velit, sit amet tincidunt metus. Phasellus vehicula id lectus non viverra. Aliquam tincidunt justo quis ante laoreet pellentesque. Fusce porta felis nec velit maximus maximus. Aenean varius erat est, vitae feugiat elit placerat id. Ut odio sapien, bibendum in mauris sit amet, blandit posuere tellus. Sed dapibus lacinia tortor et porta. Curabitur sit amet orci scelerisque, hendrerit ante ac, euismod sem. Donec elementum et quam at tristique.'},
              {title: 'Project 5', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla erat, dictum quis sodales quis, lobortis ac arcu. Nunc ac vehicula velit, sit amet tincidunt metus. Phasellus vehicula id lectus non viverra. Aliquam tincidunt justo quis ante laoreet pellentesque. Fusce porta felis nec velit maximus maximus. Aenean varius erat est, vitae feugiat elit placerat id. Ut odio sapien, bibendum in mauris sit amet, blandit posuere tellus. Sed dapibus lacinia tortor et porta. Curabitur sit amet orci scelerisque, hendrerit ante ac, euismod sem. Donec elementum et quam at tristique.'},
              {title: 'Project 6', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla erat, dictum quis sodales quis, lobortis ac arcu. Nunc ac vehicula velit, sit amet tincidunt metus. Phasellus vehicula id lectus non viverra. Aliquam tincidunt justo quis ante laoreet pellentesque. Fusce porta felis nec velit maximus maximus. Aenean varius erat est, vitae feugiat elit placerat id. Ut odio sapien, bibendum in mauris sit amet, blandit posuere tellus. Sed dapibus lacinia tortor et porta. Curabitur sit amet orci scelerisque, hendrerit ante ac, euismod sem. Donec elementum et quam at tristique.'},
              {title: 'Project 7', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla erat, dictum quis sodales quis, lobortis ac arcu. Nunc ac vehicula velit, sit amet tincidunt metus. Phasellus vehicula id lectus non viverra. Aliquam tincidunt justo quis ante laoreet pellentesque. Fusce porta felis nec velit maximus maximus. Aenean varius erat est, vitae feugiat elit placerat id. Ut odio sapien, bibendum in mauris sit amet, blandit posuere tellus. Sed dapibus lacinia tortor et porta. Curabitur sit amet orci scelerisque, hendrerit ante ac, euismod sem. Donec elementum et quam at tristique.'}
            ]);

  const {state} = useLocation();
  const {courseName } = state;
  /*
  Function delete
  Delete a specific item in an array of data
  */
  const handleDelete = (id, e) => {
    e.preventDefault();
    let currentData = projectData;
    if (id > -1) {
      currentData.splice(id,1);
    }
    setProjectData([...currentData]);
  }

  const cards = projectData.map((item, index) => {
    return (
      <div key={index}>
        <IndividualProject
          id={index}
          title={item.title}
          content={item.content}
          handleDelete ={handleDelete}
        />
      </div>

    )
  });


  return (
    <div className="projects-container">
      <h2>{courseName}</h2>
      {cards}
    </div>
  );
}

