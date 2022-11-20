import React from "react";
import { useParams } from "react-router-dom";
import { data } from "./projects";
export default function ProjectPage() {
  const { projectId } = useParams();
  const project = data.find((project) => project.id == projectId);

  return (
    <div className="container">
      <h1>{project.title}</h1>
      <p>{project.content}</p>
      <button type="submit" className="btn btn-outline-primary">
        Finished
      </button>
    </div>
  );
}
