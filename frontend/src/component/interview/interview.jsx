import React, { Component } from "react";
import "./interview.css";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import Interview from "./interview.png";
import QuestionList from "./QuestionList";

class InterviewQuestion extends Component {
  state = {};

  handleDelete = async (id) => {
    // call backend to delete question
  };
  render() {
    return (
      <>
        <div className="container-fluid grid my-1">
          <div className="row">
            <div className="h-100 col-3 p-5 bg-primary text-light grid text-center border border-dark">
              <div>
                <img src={Interview} className="interview-image" />
              </div>
              <div className="display-4">Topic</div>
              <div className="h4">SQL</div>
              <div className="h4">NoSQL</div>
              <div className="h5">
                <button className="sidebar-common-questions-btn bg-light text-danger">
                  <BsFillBookmarkHeartFill />
                </button>{" "}
                Common Questions
              </div>
            </div>
            <div className="col-9 p-7 bg-primary text-light border border-dark container-fluid">
              <button className="btn btn-secondary">New Question</button>
              <div className="question-header container-fluid">
                <div className="h2 my-3 text-dark text-center">
                  Interview Questions
                </div>
                <div className="h3 my-3 text-dark text-center">SQL</div>
              </div>

              <QuestionList />
            </div>
          </div>
        </div>
        <button type="button" className="btn btn-primary mx-1">
          Search
        </button>
        <button type="button" className="btn btn-secondary mx-1">
          Edit
        </button>
      </>
    );
  }
}

export default InterviewQuestion;
