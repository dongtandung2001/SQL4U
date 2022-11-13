import React, {useEffect, useState} from "react";
import { BsFillCheckCircleFill } from 'react-icons/bs';
import {AiFillDelete} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './recommendedProjects.css';
import auth from "../../services/authService";

export default function IndividualProject(props) {
  const [state, setState] = useState({});

  useEffect( () => {
    const user = auth.getCurrentUser();
    setState(user)
  }, []);
  
  const thisProject = {
    title: props.title,
    content: props.content
  }

  console.log(state.admin)
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
      {state.admin ? 
        <button type='button' className="check-button">
          <AiFillDelete className='check-icon' />
        </button>
      :
      <button type='button' className="check-button">
          <BsFillCheckCircleFill className='check-icon' />
        </button>
      
      }
    </div>
  );
}
