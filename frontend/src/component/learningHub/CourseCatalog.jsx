/**
 * Feature: Learning Hub
 * Page: Course Catalog
 * Note: Implemented for milestone 2
 */

import React, { Component, useState } from "react";
import "./learningHub.css";
import { withRouter } from "../withRouter";
import { coursesCard } from "./data";
import { Link } from 'react-router-dom';
import avatar from './man-teacher.png';

 {/*Using show() for showing each course card */}

function Show({ arr }) {
  return (
    <section className="coursesCard">
      <div></div>
      <div className="container grid2">
        {arr.map((val) => (
          <div key={val.id} className="items">
            <div className="content flex">
              <div className="left">
                <div className="img">
                  <img src="../images/courses/c1.png" alt="" />
                </div>
              </div>
              <div className="text">
                <h1>{val.coursesName}</h1>
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
                        <h4>{val.name}</h4>
                      </div>
                    </div>
                    <span>{val.length}</span>
                  </>
                </div>
              </div>
            </div>
            {/* Link to IndividualCourse component */}
            <Link 
              className="outline-btn"
              to={`/catalog/${'course' + val.id}`} state= {{"tutorial" : val.tutorial}}
            >
              GO !
            </Link>{" "}
          </div>
        ))}
      </div>
    </section>
  );
}


{/*
When user select a topic, it will pop-up courses related to selected topic
*/}
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
        <div><Show arr={location} /></div>
      )}

      {isShown === "basic" && ( <div><Show arr={location.filter((course) => course.topic === "basic")}/>
        </div>
      )}
      {isShown === "relational" && ( <div><Show arr={location.filter((course) => course.topic === "relational")}/>
        </div>
      )}
      {isShown === "sql" && ( <div><Show arr={location.filter((course) => course.topic === "sql")}/>
        </div>
      )}
    </div>
  );
}

class CoursesCard extends Component {
  state = { data: [] };
  componentDidMount() {
    this.setState({ data: coursesCard });
  }
  render() {
    const location = this.props.location;
    console.log(location);
    return (
      <>
        <div className="topic">
          <h2>TOPIC</h2>
          <App location={this.state.data} />
        </div>
      </>
    );
  }
}
export default withRouter(CoursesCard);
