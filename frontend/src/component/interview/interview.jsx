import React, { Component } from "react";
import "./interview.css";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import Interview from "./interview.png";
import { Link } from "react-router-dom";

class InterviewQuestion extends Component {
  state = {};
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
            <div className="col-9 p-7 bg-primary text-light text-center border border-dark container-fluid">
              <div className="question-header container-fluid">
                <div className="h2 my-3 text-dark">Interview Questions</div>
                <div className="h3 my-3 text-dark">SQL</div>
              </div>

              <div className="question question-1 border border-dark h-25">
                <div className="h4 text-dark">Q1. Define schema for ... </div>
                <div className="text-start text-black-50 mx-4">
                  Answer:{" "}
                  <button className="answer-button mx-2">
                    <FaAngleUp />
                  </button>
                </div>
              </div>
              <div className="question border border-dark h-25">
                <div className="h4 text-dark">
                  Q2. What is index in SQL? ...
                </div>
                <div className="text-end text-black-50 mx-4">
                  Answer
                  <button className="answer-button mx-2">
                    <FaAngleDown />
                  </button>
                </div>
              </div>
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
