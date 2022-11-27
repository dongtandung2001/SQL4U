import React, { useEffect, useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import "./recommendedProjects.css";
import auth from "../../services/authService";
import * as projectService from '../../services/projectService';
import * as courseService from '../../services/courseService';

export default function IndividualProject(props) {
  const { courseId } = useParams();
  const [user, setUser] = useState({});

  useEffect( () => {
    const getUser = async () => {
      const user = await auth.getCurrentUser();
      setUser(user);
    }
    getUser();
  }, []);

  const handleDelete = async (e) => {
    e.preventDefault();
    await courseService.deleteProject(courseId, props.id);
    await projectService.deleteProject(props.id);
    
  }

  const thisProject = {
    id: props.id,
    title: props.title,
  };

  return (
    <div className="project-title-div">
      <Link
        to={`/catalog/${courseId}/project/${props.id}`}
        className="project-title"
      >
        {props.title}
      </Link>
      {user.admin ? (
        <button 
          className="btn btn-outline-primary btn-sm"
          onClick={handleDelete}
        >
            Delete
        </button>
      ) : (
        <button type="button" className="check-button">
          <BsFillCheckCircleFill className="check-icon" />
        </button>
      )}
      
    </div>
  );
}
