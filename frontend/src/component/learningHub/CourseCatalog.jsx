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
import auth from '../../services/authService';
import * as courseService from "../../services/courseService";

{
  /*Using show() for showing each course card */
}

function Show({ arr }) {
  const user = auth.getCurrentUser();
  return (
    <section className="coursesCard">
      <div></div>
      <div className="container grid2">
        {arr.map((val) => (
          <div key={val._id} className="items">
            <div className="content-flex">
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
            {user.admin && (
              <Link className="btn btn-outline-primary" to={`/catalog/addOrEdit/${val._id}`}>
                Edit
              </Link>
            )}
            <Link className="btn btn-outline-primary" to={`/catalog/${val._id}`}>
                GO !
            </Link>
        
            
          </div>
        ))}
      </div>
    </section>
  );
}

{
  /*
When user select a topic, it will pop-up courses related to selected topic
*/
}
function App({ location }) {
  const [isShown, setIsShown] = useState("all");
  
  return (
    <div>
      <button className="topic-button" onClick={() => setIsShown("all")}>
        All
      </button>
      <button className="topic-button" onClick={() => setIsShown("basic")}>
        Basic Concepts
      </button>
      <button className="topic-button" onClick={() => setIsShown("relational")}>
        Relational Model
      </button>
      <button className="topic-button" onClick={() => setIsShown("sql")}>
        SQL Queries
      </button>
      
      {/* 👇️ show elements on click */}

      {isShown === "all" && (
        <div>
          <Show arr={location} />
        </div>
      )}

      {isShown === "basic" && (
        <div>
          <Show arr={location.filter((course) => course.topic === "basic")} />
        </div>
      )}
      {isShown === "relational" && (
        <div>
          <Show
            arr={location.filter((course) => course.topic === "relational")}
          />
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
  state = { data: [] };
  componentDidMount = async () => {
    const { data } = await courseService.getCourses();
    this.setState({ data });
  };
  render() {
    const location = this.props.location;
    const user = auth.getCurrentUser();

    //Handle add new course

    return (
      <div className="topic container">
        <h2 style = {{display: "inline-block", margin: "auto 1rem 1rem auto"}}>TOPIC</h2>
        {  
          user.admin && 
          <Link 
            to ={`/catalog/addOrEdit/new`}
            className="btn btn-primary rounded-pill custom-transition"
          >
            + Add New Course
            </Link>
        }
        <App location={this.state.data} />
      </div>
    );
  }
}
export default withRouter(CoursesCard);
