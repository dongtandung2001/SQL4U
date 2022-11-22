import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { data } from "./projects";

import auth from "../../services/authService";

export default function ProjectPage() {
  const { projectId } = useParams();
  const project = data.find((project) => project._id == projectId);
  const user = auth.getCurrentUser();
  return (
    <div className="container">
      <h1>{project.title}</h1>
      <p>{project.content}</p>
      {user && !user.admin && (
        <button type="submit" className="btn btn-outline-primary">
          Finished
        </button>
      )}
      {user && user.admin && (
        <Link to={`/project/add/${projectId}`}>
          <button className="btn btn-primary">Edit</button>
        </Link>
      )}
    </div>
  );
}
