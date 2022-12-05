import React, { useEffect, useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import * as projectService from "../../services/projectService";
import * as courseService from "../../services/courseService";
import * as userService from "../../services/userService";
import "./recommendedProjects.css";

export default function IndividualProject(props) {
  const { courseId } = useParams();
  const {pathname} = useLocation();
  const navigate = useNavigate();

  //States
  const [prjDifficulty, setPrjDifficulty] = useState("");
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
    const getProject = async () => {
      const { data: projectObj } = await projectService.getProject(props.id);
      setPrjDifficulty(projectObj.difficulty.toUpperCase());
    };
    getUser();
    getProject();
  }, [props.id]);

  //Handling events
  const handleDelete = async (e) => {
    e.preventDefault();
    await courseService.deleteProject(courseId, props.id);
    await projectService.deleteProject(props.id);
    window.location = `/projectLandingPage/${courseId}/project`;
  };

  const handleNavigateForward = () => {
    
    const removeFirstSlash = pathname.substring(1);
    const slashIndex = removeFirstSlash.indexOf('/');
    const navigateTo = removeFirstSlash.substring(0, slashIndex)
    if (navigateTo === "projectLandingPage"){
      navigate(`/${navigateTo}/${courseId}/project/${props.id}`);
    } else {
      navigate(`/${navigateTo}/${courseId}/project/${props.id}`);
    }
    
  }

  const handleMouseEnter = () => setIsHovering(true);

  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div className="project-title-div">
      <div
        // to={`/projectLandingPage/${courseId}/project/${props.id}`}
        onClick={handleNavigateForward}
        className="project-title"
      >
        {props.title} - <span style={{color:"#FFC000"}}>{prjDifficulty}</span>
      </div>
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
