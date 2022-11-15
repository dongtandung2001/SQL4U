import React, {useEffect, useState} from "react";
import { BsFillCheckCircleFill } from 'react-icons/bs';
import {AiFillDelete} from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import './recommendedProjects.css';
import auth from "../../services/authService";

export default function IndividualProject(props) {
  const location = useLocation();
  console.log('hi nha', location);
  const {courseId} = location.state;
  const [state, setState] = useState({});

  useEffect( () => {
    const user = auth.getCurrentUser();
    setState(user)
  }, []);
  
  const thisProject = {
    title: props.title,
    content: props.content
  }


  return (
    <div className='project-title-div'>
      <Link
        to={`/catalog/${courseId}/project/projectpage/${props.id+1}`}
        state={{ content: thisProject }}
        className='project-title'
      >
        <span style={{ marginRight: "10px" }}>{props.id+1}.</span>
        {props.title}
      </Link>
      {state.admin ? 
        <button 
          type='button' 
          className="check-button"
          onClick={e => props.handleDelete(props.id, e)}
        >
          <AiFillDelete className='check-icon' />
        </button>
      :
      <button type='button' className="check-button" >
          <BsFillCheckCircleFill className='check-icon'  />
        </button>
      
      }
    </div>
  );
}
