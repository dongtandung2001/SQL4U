import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import * as projectService from "../../services/projectService";
import * as userService from '../../services/userService';

export default function ProjectPage() {
  const [user, setUser] = useState({})
  const [project, setProject] = useState({});
  const [projectContents, setProjectContents] = useState([]);
  const { projectId, courseId } = useParams();
  const [finishBtnText, setFinishBtnText] = useState("")
  const [finishButtonStyle, setFinisButtonStyle] = useState({});

  useEffect(() => {
    //Fetch project using projectID
    const getProject = async () => {
      const { data: projectObj } = await projectService.getProject(projectId);
      setProject(projectObj);
      setProjectContents(projectObj.contents);
    };
    const isFinished = async () => {
      const { data: user } = await userService.getUser(localStorage.getItem('token'));
      setUser(user);

      if (user.finishedProject.some(project => project._id === projectId)) {
        setFinishBtnText("✅ Finished");
        setFinisButtonStyle({ backgroundColor: "#0d6efd", color: "#fff", fill: "#0d6efd" })
      } else {
        setFinishBtnText("Finish");
      }
    }
    getProject();
    isFinished();
  }, [projectId]);

  //Handling click event
  const finishProject = async () => {
    await userService.finishProject(user._id, projectId);
    setFinishBtnText("✅ Finished");
  }

  const unFinishProject = async () => {
    await userService.uncheckFinishProject(user._id, projectId);
    setFinishBtnText("Finish");
  }

  return (
    <div className="container">
      {/* Render project name */}
      <h1 id="project-title" style={{ color: "#4891d5" }}>{project.title}</h1>
      {/* Render project contents */}
      <div className="project-content-div">
        {project &&
          projectContents.map((item) => {
            return (
              <div>
                <h5 style={{ color: "#89b3da" }}>
                  {item.header}{" "}
                  <span>
                    {user && user.admin && (
                      <button
                        onClick={async () => {
                          await projectService.deleteContent(projectId, item._id);
                          window.location = `/projectLandingPage/${courseId}/project/${projectId}`;
                        }}
                        className="btn btn-outline-danger btn-sm ms-2"
                      >
                        Delete
                      </button>
                    )}
                  </span>
                </h5>
                {item.detail.split('\n').map((str) => {
                  return (<p className="project-detail-p">
                    {str}
                  </p>)
                })}

              </div>
            );
          })}
      </div>

      {user && !user.admin && (
        <button
          type="submit"
          style={finishButtonStyle}
          className="btn btn-outline-primary me-2"
          onClick={() => {
            return (
              finishBtnText === "Finish" ? finishProject() : unFinishProject()
            );
          }}>
          {finishBtnText}
        </button>
      )}
      {user && user.admin && (
        <Link to={`/catalog/${courseId}/project/add/${projectId}`}>
          <button className="btn btn-primary me-2">Edit</button>
        </Link>
      )}
      <Link to={`/projectLandingPage/${courseId}/project`}>
        <button className="btn btn-primary me-2">Go back</button>
      </Link>
      <a href="#project-title" className="btn btn-primary">Go to Top</a>
    </div>
  );
}
