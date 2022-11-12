import React, { Component } from "react";
import CoursesCard from "./CoursesCard";
import OnlineCourses from "./OnlineCourses";



class LearningHub extends Component {
  state = {};
  render() {
    return (
   <>
   <CoursesCard/>
   <OnlineCourses/>
   </>
    );
  }
}

export default LearningHub;
