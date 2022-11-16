import React, { useEffect, useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import "./recommendedProjects.css";
import auth from "../../services/authService";

export default function IndividualProject(props) {
  const { courseId } = useParams();
  // const [state, setState] = useState({});

  // useEffect(() => {
  //   const user = auth.getCurrentUser();
  //   setState(user);
  // }, []);

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
      {/* {state.admin ? (
        <button
          type="button"
          className="check-button"
          onClick={(e) => props.handleDelete(props.id, e)}
        >
          <AiFillDelete className="check-icon" />
        </button>
      ) : (
        <button type="button" className="check-button">
          <BsFillCheckCircleFill className="check-icon" />
        </button>
      )} */}
      <button type="button" className="check-button">
        <BsFillCheckCircleFill className="check-icon" />
      </button>
    </div>
  );
}
