import React, { Component } from "react";
import "./qna-style.css";
import TopicList from "./TopicList";
import CreatePost from "./CreatePost";
import QuestionPost from "./QuestionPost";

class QnA extends Component {
  state = {};
  render() {
    return (<div className="container-fluid body">
      <div className="row g-4">
        <div className="col-sm-3 topic-col">
          <div className="topic-logo">
            <img src="../images/qna/q&a.png" alt="question and answer pic" width="200px" height="100px" />
          </div>
          <TopicList />


        </div>
        <div className="col-sm-7">

          <CreatePost />

          <div className="divider">

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
              <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>
          <QuestionPost />

          
        </div>
        <div className="col-sm-2"> content
        </div>
      </div>
        
    </div>);
  }
}

export default QnA;
