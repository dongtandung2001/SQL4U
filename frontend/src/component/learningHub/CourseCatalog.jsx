/**
 * Feature: Learning Hub
 * Page: Course Catalog
 * Note: Implemented for milestone 2
 */

import React, { Component, useState } from "react";
import "./learningHub.css";
import { withRouter } from "../withRouter";
// import { coursesCard } from "./data";
import { Link } from "react-router-dom";
import logo from "./c1.png";
import avatar from "./man-teacher.png";
import auth from "../../services/authService";
import * as courseService from "../../services/courseService";
import Pagination from "../common/pagination";
import { paginate } from "../../util/paginate";

function Show({ arr }) {
  const user = auth.getCurrentUser();
  return (
    <section className="coursesCard">
      <div></div>
      <div className="container grid2">
        {arr.map((val) => (
          <div key={val._id} className="items">
            <div className="content-flex">
              {user.admin && (
                <button
                  className="btn btn-danger btn-sm ms-0"
                  onClick={async () => {
                    await courseService.deleteCourse(val._id);
                    window.location = "/catalog";
                  }}
                >
                  Delete
                </button>
              )}
              <div className="left">
                <div className="img">
                  <img src={logo} alt="" />
                </div>
              </div>
              <div className="text">
                <h1>{val.name}</h1>
                <div className="rate">
                  <i className="fa fa-star blue"></i>
                  <i className="fa fa-star blue"></i>
                  <i className="fa fa-star blue"></i>
                  <i className="fa fa-star blue"></i>
                  <i className="fa fa-star blue"></i>
                  <label htmlFor="">(5.0)</label>
                </div>
                <div className="details">
                  <>
                    <div className="box">
                      <div className="dimg">
                        <img src={avatar} alt="" />
                      </div>
                      <div className="para">
                        <h4>{val.teacher}</h4>
                      </div>
                    </div>
                    <span>{val.length}</span>
                  </>
                </div>
              </div>
            </div>
            {/* Link to Individual Course component if not admin else to edit course */}
            {user && user.admin && (
              <React.Fragment>
                <Link
                  className="btn btn-outline-primary"
                  to={`/catalog/addOrEdit/${val._id}`}
                >
                  Edit
                </Link>
              </React.Fragment>
            )}
            <Link
              className="btn btn-outline-primary"
              to={`/catalog/${val._id}`}
            >
              GO !
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

function App({ location, onPageChange }) {
  const [isShown, setIsShown] = useState("all");

  return (
    <div>
      <button
        className="topic-button"
        onClick={() => {
          setIsShown("all");
          onPageChange("all");
        }}
      >
        All
      </button>
      <button
        className="topic-button"
        onClick={() => {
          onPageChange("beginner");
          setIsShown("beginner");
        }}
      >
        Basic Concepts
      </button>
      <button
        className="topic-button"
        onClick={() => {
          setIsShown("rm");
          onPageChange("rm");
        }}
      >
        Relational Model
      </button>
      <button
        className="topic-button"
        onClick={() => {
          setIsShown("fo");
          onPageChange("fo");
        }}
      >
        File Organization
      </button>
      <button
        className="topic-button"
        onClick={() => {
          setIsShown("nosql");
          onPageChange("nosql");
        }}
      >
        NoSQL
      </button>
      <button
        className="topic-button"
        onClick={() => {
          setIsShown("sql");
          onPageChange("sql");
        }}
      >
        SQL
      </button>

      {/* 👇️ show elements on click */}

      {isShown === "all" && (
        <div>
          <Show arr={location} />
        </div>
      )}

      {isShown === "beginner" && (
        <div>
          <Show
            arr={location.filter((course) => course.topic === "beginner")}
          />
        </div>
      )}
      {isShown === "rm" && (
        <div>
          <Show arr={location.filter((course) => course.topic === "rm")} />
        </div>
      )}
      {isShown === "fo" && (
        <div>
          <Show arr={location.filter((course) => course.topic === "fo")} />
        </div>
      )}
      {isShown === "nosql" && (
        <div>
          <Show arr={location.filter((course) => course.topic === "nosql")} />
        </div>
      )}
      {isShown === "sql" && (
        <div>
          <Show arr={location.filter((course) => course.topic === "sql")} />
        </div>
      )}
    </div>
  );
}

class CoursesCard extends Component {
  state = { data: [], pageSize: 6, currentPage: 1, currentTopic: "all" };

  componentDidMount = async () => {
    const { data } = await courseService.getCourses();
    this.setState({ data });
  };

  handleChange = (page) => {
    this.setState({ currentPage: page });
  };

  onPageChange = (topic) => {
    this.setState({ currentTopic: topic, currentPage: 1 });
  };

  render() {
    const user = auth.getCurrentUser();
    const filtered = this.state.data.filter(
      (course) => course.topic === this.state.currentTopic
    );

    let courses;
    if (filtered.length === 0) {
      courses = paginate(
        this.state.data,
        this.state.currentPage,
        this.state.pageSize
      );
    } else {
      courses = paginate(filtered, this.state.currentPage, this.state.pageSize);
    }
    return (
      <div className="topic container">
        <h2 style={{ display: "inline-block", margin: "auto 1rem 1rem auto" }}>
          TOPIC
        </h2>
        {user.admin && (
          <Link
            to={`/catalog/addOrEdit/new`}
            className="btn btn-primary rounded-pill custom-transition"
          >
            + Add New Course
          </Link>
        )}
        <App location={courses} onPageChange={this.onPageChange} />
        <Pagination
          itemsCount={
            this.state.currentTopic === "all"
              ? this.state.data.length
              : filtered.length
          }
          pageSize={this.state.pageSize}
          onPageChange={this.handleChange}
          currentPage={this.state.currentPage}
        />
      </div>
    );
  }
}
export default withRouter(CoursesCard);
