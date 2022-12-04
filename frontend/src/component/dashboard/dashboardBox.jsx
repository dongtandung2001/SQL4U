import React from "react";

const DashboardBox = ({
  icon,
  title = "placeholder",
  content,
  textContent,
  displayContent,
  button,
  bgColor,
  projects,
  questions,
}) => {
  return (
    <div className="rcorners">
      <div className="boxIcons">{icon}</div>
      <h3 className="boxTitle">{title}</h3>
      {/* <p>hello</p> */}
      <p className="boxTextContent">{textContent}</p>
      {projects &&
        projects
          .slice(0, 3)
          .map((project) => <p className="boxTextContent">{project.title}</p>)}
      {questions &&
        questions
          .slice(0, 1)
          .map((question) => (
            <p className="boxTextContent">{question.question}</p>
          ))}
      <div className="boxDisplayContent">{displayContent}</div>
      <div className="boxContent">{content}</div>
      {/* <p>hello</p> */}
      {/* This is a box */}
      {/* <i className="fa fa-graduation-cap" aria-hidden="true"></i> */}
      <div style={{ backgroundColor: bgColor }}>{bgColor}</div>
      <div className="boxButton">{button}</div>
    </div>
  );
};

export default DashboardBox;
