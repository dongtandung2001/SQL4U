import React, { Component, useState } from "react";
import "./learningHub.css";
import { withRouter } from "../withRouter";
import { coursesCard } from "./data";

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
                        <img src="./images/team/t4.webp" alt="" />
                      </div>
                      <div className="para">
                        <h4>{val.name}</h4>
                      </div>
                    </div>
                    <span>{val.totalTime}</span>
                  </>
                </div>
              </div>
            </div>
            <button className="outline-btn">ENROLL NOW !</button>{" "}
          </div>
        ))}
      </div>
    </section>
  );
}

function App({ location }) {
  const [isShown, setIsShown] = useState("all");
  console.log(location);
  return (
    <div>
      <button className="topic-button" onClick={() => setIsShown("all")}>
        All
      </button>
      <button className="topic-button" onClick={() => setIsShown("basic")}>
        Basic Concepts
      </button>
      <button className="topic-button" onClick={() => setIsShown("all")}>
        SQL Queries
      </button>
      <button className="topic-button" onClick={() => setIsShown("all")}>
        Relational Model
      </button>
      {/* 👇️ show elements on click */}

      {isShown === "all" && (
        <div>
          <Show arr={location} />
          {/* <Show arr={sql_queries} />
          <Show arr={relational_model} /> */}
        </div>
      )}

      {isShown === "basic" && (
        <div>
          <Show
            arr={location.filter((course) => course.topic === "basic_concepts")}
          />
          {/* <Show arr={sql_queries} />
          <Show arr={relational_model} /> */}
        </div>
      )}
      {/* {isShown===myArray[1] && (
        <div>
          <Show arr={coursesCard} />
        </div>
      )}
      
      {isShown===myArray[2] && (
        <div>
         <Show arr={coursesCard} />
        </div>
      )}
      
      {isShown===myArray[3] && (
        <div>
        <Show arr={coursesCard} />
        </div>
      )} */}
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
