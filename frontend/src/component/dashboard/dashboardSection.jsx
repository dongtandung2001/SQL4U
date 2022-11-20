import React from "react";

const DashboardSection = ({ title, icon, children }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>{icon}</div>
      {/* <p>hello</p> */}
      <div>{children}</div>
      {/* <p>hello</p> */}
    </div>
  );
};

export default DashboardSection;
