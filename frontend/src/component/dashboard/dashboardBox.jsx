import React from "react";

const DashboardBox = ({
  icon,
  title = "placeholder",
  content,
  textContent,
  displayContent,
  button,
  bgColor,
}) => {
  return (
    <div className="rcorners">
      <div className="boxIcons">{icon}</div>
      <h3 className="boxTitle">{title}</h3>
      {/* <p>hello</p> */}
      <p className="boxTextContent">{textContent}</p>
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
