import React from "react";
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './recommendedProjects.css';

export default function IndividualProject(props) {
  const thisProject = {
    title: props.title,
    content: props.content
  }
  return (
    <div className='project-title-div'>
      <Link
        to={`/project/projectpage/${props.count}`}
        state={{ content: thisProject }}
        className='project-title'
      >
        <span style={{ marginRight: "10px" }}>{props.count}.</span>
        {props.title}
      </Link>
      <button type='button' className="check-button"><BsFillCheckCircleFill className='check-icon' /></button>
    </div>
  );
}
