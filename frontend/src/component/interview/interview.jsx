import React, { Component } from "react";
import "./interview.css";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import Interview from './interview.png'
import QuestionList from "./QuestionList"

class InterviewQuestion extends Component {
  state = {};
  render() {
    return (
        <>
          <div class="container-fluid grid my-1">
            <div class="row">
              <div class="h-100 col-3 p-5 bg-primary text-light grid text-center border border-dark">
                <div><img src={Interview} class="interview-image"/></div>
                <div class="display-4">Topic</div>
                <div class="h4">SQL</div>
                <div class="h4">NoSQL</div>
                <div class="h5">
                  <button class="sidebar-common-questions-btn bg-light text-danger">
                    <BsFillBookmarkHeartFill /></button> Common Questions
                </div>
              </div>
              <div class="col-9 p-7 bg-primary text-light text-center border border-dark container-fluid">
                <div class="question-header container-fluid">
                  <div class="h2 my-3 text-dark">Interview Questions</div>
                  <div class="h3 my-3 text-dark">SQL</div>
                </div>

                <QuestionList />
              </div>
            </div>
          </div>
          <button type="button" class="btn btn-primary mx-1">Search</button>
          <button type="button" class="btn btn-secondary mx-1">Edit</button>
        </>
    );
  }
}

export default InterviewQuestion;
