import React, { Component } from "react";
// import NavBar from './navbar';
// import { FontAwesomeIcon } from "@fontawesome/react-FontAwesomeIcon";
import "./dashboard.css";
import qaImage from "./images/qa3.png";
import DashboardSection from "./dashboardSection";
import DashboardBox from "./dashboardBox";
import DashboardSideBar from "./dashboardSideBar";
import Button from "../../index.js";
import { useState, useEffect } from "react";
import DashboardChart from "./dashboardChart";
import * as userService from "../../services/userService";
import * as courseService from "../../services/courseService";
import shuffle from "lodash/shuffle";
// import "bootstrap/dist/css/bootstrap.min.css";
// import * as Poop from './dashboardBox';

const Dashboard = () => {
  // const bob = [{}, 1, "e"];

  const [isEdit, setIsEdit] = useState("hello");
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState(null);
  useEffect(() => {
    const fetch = async () => {
      const { data } = await userService.getUser(localStorage.getItem("token"));
      setUser(data);
      const { data: courses } = await courseService.getCourses();
      setCourses(shuffle(courses));
    };
    fetch();
  }, []);

  const handleEdit = (arg) => {
    setIsEdit(arg);
  };

  return (
    <div className="dashBody">
      <div className="dashboardSideBar">
        <DashboardSideBar
          icon={
            <a href="/profile">
              <i className="fa fa-user-circle profile-icon" aria-hidden="true"></i>
            </a>
          }
        />
      </div>
      <div className="dashboardContent">
        {/* admin buttons */}

        {/* Content begins here */}
        <h1 className="head">Dashboard</h1>
        {/* 
        <div className="dashboardOverview">
          <DashboardSection title={"OVERVIEW"}>
            <div className="dashboardOverviewBoxLeft">
              <DashboardBox
                icon={
                  <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                }
                title={"Courses in progress"}
                displayContent={
                  <div className="overviewProgress">
                    <h5>6</h5>
                  </div>
                }
              />
            </div>
            <div className="dashboardOverviewBoxRight">
              <DashboardBox
                icon={<i className="fa fa-clock-o" aria-hidden="true"></i>}
                title={"Time Spent"}
                displayContent={
                  <div className="overviewProgress">
                    <h5>1h 15m</h5>
                  </div>
                }
              />
            </div>
            <div className="dashboardOverviewBoxBottom">
              <DashboardBox
                title={"Study Statisics"}
                // content={
                //   <div>
                //     <DashboardChart chart={"chart"} />
                //   </div>
                // }
              />
            </div>
          </DashboardSection>
        </div> */}

        <div className="dashboardInterviewQuestions">
          {user && (
            <DashboardSection
              title={<a href="/interview">INTERVIEW QUESTIONS</a>}
            >
              <div className="dashboardInterviewBox">
                <DashboardBox
                  icon={
                    <i className="fa fa-question-circle" aria-hidden="true"></i>
                  }
                  title={"Questions you've saved"}
                  questions={user.savedQuestion}
                />
              </div>
            </DashboardSection>
          )}
        </div>
        <div className="dashboardMyCourses">
          {courses && (
            <DashboardSection title={"Courses you might interested"}>
              <div className="dashboardMyCoursesBoxTopLeft">
                <DashboardBox
                  icon={
                    <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                  }
                  title={
                    <a href={`/catalog/${courses[0]._id}`}>{courses[0].name}</a>
                  }
                  // color={<div className="rcornersColor"></div>}
                />
              </div>
              <div className="dashboardMyCoursesBoxTopRight">
                <DashboardBox
                  icon={
                    <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                  }
                  title={
                    <a href={`/catalog/${courses[1]._id}`}>{courses[1].name}</a>
                  }
                />
              </div>
              <div className="dashboardMyCoursesBoxBottomLeft">
                <DashboardBox
                  icon={
                    <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                  }
                  title={
                    <a href={`/catalog/${courses[2]._id}`}>{courses[2].name}</a>
                  }
                />
              </div>
              <div className="dashboardMyCoursesBoxBottomRight">
                <DashboardBox
                  icon={
                    <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                  }
                  title={
                    <a href={`/catalog/${courses[3]._id}`}>{courses[3].name}</a>
                  }
                />
              </div>
            </DashboardSection>
          )}
        </div>
        <div  className="dashboardFinishedProjects">
          {user && (
            <DashboardSection title={"FINISHED PROJECTS"}>
              <div className="dashboardFinishedProjectsBox" >
                <DashboardBox
                  icon={<i className="fa fa-trophy" aria-hidden="true"></i>}
                  title={"Completed Projects"}
                  projects={user.finishedProject}
                />
              </div>
            </DashboardSection>
          )}
        </div>
        <div className="dashboardQuestions">
          <DashboardSection title={<a href="/qna">QUESTIONS</a>}>
            <div className="dashboardQuestionsBox">
              <DashboardBox
                title={"Any Questions?"}
                // bgColor="blue"
                icon={<img src={qaImage} height="80" width="100" />}
                textContent={"You can post/find questions here:"}
                button={
                  <a href="/qna">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg btn-block"
                    >
                      Ask!
                    </button>
                  </a>
                }
                // color={#fff}
              />
            </div>
          </DashboardSection>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
