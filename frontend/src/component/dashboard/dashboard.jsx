import React, { Component } from "react";
// import NavBar from './navbar';
// import { FontAwesomeIcon } from "@fontawesome/react-FontAwesomeIcon";
import "./dashboard.css";
import qaImage from "./images/qa3.png";
import DashboardSection from "./dashboardSection";
import DashboardBox from "./dashboardBox";
import DashboardSideBar from "./dashboardSideBar";
import Button from "../../index.js";
import { useState } from "react";
import DashboardChart from "./dashboardChart";
// import "bootstrap/dist/css/bootstrap.min.css";
// import * as Poop from './dashboardBox';

// console.log("Admin").onClick;

const Dashboard = () => {
  // const bob = [{}, 1, "e"];

  const [isEdit, setIsEdit] = useState("hello");

  const handleEdit = (arg) => {
    setIsEdit(arg);
    // console.log(bob);
  };

  return (
    <div className="dashBody">
      <div className="dashboardSideBar">
        <DashboardSideBar
          icon={
            <a href="#">
              <i class="fa fa-user-circle" aria-hidden="true"></i>
            </a>
          }
        />
      </div>
      <div className="dashboardContent">
        {/* admin buttons */}
        <button type="button" class="btn btn-secondary btn-sm">
          Admin
        </button>
        <button
          onClick={() => handleEdit("bye")}
          type="button"
          class="btn btn-secondary btn-sm"
        >
          Edit {isEdit}
        </button>

        {/* Content begins here */}
        <h1 className="head">Dashboard</h1>

        <div className="dashboardOverview">
          <DashboardSection title={"OVERVIEW"}>
            <div className="dashboardOverviewBoxLeft">
              <DashboardBox
                icon={<i class="fa fa-graduation-cap" aria-hidden="true"></i>}
                title={"Courses in progress"}
                displayContent={
                  <div class="overviewProgress">
                    <h5>5</h5>
                  </div>
                }
              />
            </div>
            <div className="dashboardOverviewBoxRight">
              <DashboardBox
                icon={<i class="fa fa-clock-o" aria-hidden="true"></i>}
                title={"Time Spent"}
                displayContent={
                  <div class="overviewProgress">
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
        </div>
        <div className="dashboardInterviewQuestions">
          <DashboardSection title={"INTERVIEW QUESTIONS"}>
            <div className="dashboardInterviewBox">
              <DashboardBox
                icon={<i class="fa fa-question-circle" aria-hidden="true"></i>}
                title={"Questions you've viewed"}
              />
            </div>
          </DashboardSection>
        </div>
        <div className="dashboardMyCourses">
          <DashboardSection title={"MY COURSES"}>
            <div className="dashboardMyCoursesBoxTopLeft">
              <DashboardBox
                icon={<i class="fa fa-graduation-cap" aria-hidden="true"></i>}
                title={"Database basics"}
                content={
                  <div class="progress yellow">
                    <span class="progress-left">
                      <span class="progress-bar"></span>
                    </span>
                    <span class="progress-right">
                      <span class="progress-bar"></span>
                    </span>
                    <div class="progress-value">37.5%</div>
                  </div>
                }
                // color={<div class="rcornersColor"></div>}
              />
            </div>
            <div className="dashboardMyCoursesBoxTopRight">
              <DashboardBox
                icon={<i class="fa fa-graduation-cap" aria-hidden="true"></i>}
                title={"Basic Data Query"}
                content={
                  <div class="progress blue">
                    <span class="progress-left">
                      <span class="progress-bar"></span>
                    </span>
                    <span class="progress-right">
                      <span class="progress-bar"></span>
                    </span>
                    <div class="progress-value">90%</div>
                  </div>
                }
              />
            </div>
            <div className="dashboardMyCoursesBoxBottomLeft">
              <DashboardBox
                icon={<i class="fa fa-graduation-cap" aria-hidden="true"></i>}
                title={"Intermediate SQL"}
                textContent={<a href="#">Start now</a>}
              />
            </div>
            <div className="dashboardMyCoursesBoxBottomRight">
              <DashboardBox
                icon={<i class="fa fa-graduation-cap" aria-hidden="true"></i>}
                title={"Advanced SQL"}
                textContent={<a href="#">Start now</a>}
              />
            </div>
          </DashboardSection>
        </div>
        <div className="dashboardFinishedProjects">
          <DashboardSection title={"FINISHED PROJECTS"}>
            <div className="dashboardFinishedProjectsBox">
              <DashboardBox
                icon={<i class="fa fa-trophy" aria-hidden="true"></i>}
                title={"Completed Projects"}
              />
            </div>
          </DashboardSection>
        </div>
        <div className="dashboardQuestions">
          <DashboardSection title={"QUESTIONS"}>
            <div className="dashboardQuestionsBox">
              <DashboardBox
                title={"Any Questions?"}
                // bgColor="blue"
                icon={<img src={qaImage} height="80" width="100" />}
                textContent={"You can post/find questions here:"}
                button={
                  <button
                    type="button"
                    class="btn btn-primary btn-lg btn-block"
                  >
                    Ask!
                  </button>
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
