import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import * as projectService from "../../services/projectService";

import auth from "../../services/authService";

export default function ProjectPage() {
  const [project, setProject] = useState({});
  const [projectContents, setProjectContents] = useState([]);
  const { projectId, courseId } = useParams();
  const user = auth.getCurrentUser();

  useEffect(() => {
    //Fetch project using projectID
    const getProject = async () => {
      const { data: projectObj } = await projectService.getProject(projectId);
      setProject(projectObj);
      setProjectContents(projectObj.contents);
    };
    getProject();
  });

  return (
    <div className="container">
      {/* Render project name */}
      <h1 style={{ color: "#4891d5" }}>{project.title}</h1>
      {/* Render project contents */}
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
                        window.location = `/catalog/${courseId}/project/${projectId}`;
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  )}
                </span>
              </h5>
              <p className="project-detail-p">
                {item.detail.replaceAll(/\\/g, "")[0].toUpperCase() +
                  item.detail.replaceAll(/\\/g, "").slice(1)}
              </p>
            </div>
          );
        })}
      {user && !user.admin && (
        <button type="submit" className="btn btn-outline-primary">
          Finished
        </button>
      )}
      {user && user.admin && (
        <Link to={`/catalog/${courseId}/project/add/${projectId}`}>
          <button className="btn btn-primary">Edit</button>
        </Link>
      )}
    </div>
  );
}
