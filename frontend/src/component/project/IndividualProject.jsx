import React, { useEffect, useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import * as projectService from "../../services/projectService";
import * as courseService from "../../services/courseService";
import * as userService from "../../services/userService";
import "./recommendedProjects.css";

export default function IndividualProject(props) {
  //States
  const { courseId } = useParams();
  const [user, setUser] = useState({});
  const [checkButtonStyle, setCheckButtonStyle] = useState({});
  const [isHovering, setIsHovering] = useState(false);

  //useEffect
  useEffect(() => {
    const getUser = async () => {
      const { data: user } = await userService.getUser(
        localStorage.getItem("token")
      );
      setUser(user);
      //Color the check icon when it is already finished
      if (user.finishedProject.some((project) => project._id === props.id)) {
        setCheckButtonStyle({ fill: "#0d6efd" });
      }
    };
    getUser();
  }, [props.id]);

  //Handling events
  const handleDelete = async (e) => {
    e.preventDefault();
    await courseService.deleteProject(courseId, props.id);
    await projectService.deleteProject(props.id);
    window.location = `/catalog/${courseId}/project`;
  };

  const handleMouseEnter = () => setIsHovering(true);

  const handleMouseLeave = () => setIsHovering(false);

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
          <BsFillCheckCircleFill
            style={
              isHovering && checkButtonStyle
                ? { fill: "#fff" }
                : checkButtonStyle
            }
            className="check-icon"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </button>
      )}
    </div>
  );
}
