import React, { Component } from "react";
import "./interview.css";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import Interview from "./interview.png";
import QuestionList from "./QuestionList";
import { Link } from "react-router-dom";
import * as authService from "../../services/authService";
import * as interviewService from "../../services/interviewService";

class InterviewQuestion extends Component {
  state = {
    topics: [
      { _id: "beginner", name: "Basic Concepts" },
      { _id: "rm", name: "Relational Model" },
      { _id: "fo", name: "File Organization" },
      { _id: "nosql", name: "NoSQL" },
      { _id: "sql", name: "SQL" },
    ],
  };

  handleDelete = async (id) => {
    // call backend to delete question
    await interviewService.deleteInterviewQuestion(id);
    window.location = "/interview";
  };

  componentDidMount = async () => {
    const user = authService.getCurrentUser();
    this.setState({ user });
  };

  render() {
    const { user } = this.state;
    return (
      <>
        <div className="container-fluid grid my-1">
          <div className="row">
            <div className="h-100 col-3 p-5 bg-primary text-light grid text-center border border-dark">
              <div>
                <img src={Interview} className="interview-image" />
              </div>
              <div className="display-4">Topic</div>
              {this.state.topics.map((topic) => (
                <h4 key={topic._id}>{topic.name}</h4>
              ))}
              <div className="h5">
                <button className="sidebar-common-questions-btn bg-light text-danger">
                  <BsFillBookmarkHeartFill />
                </button>{" "}
                Common Questions
              </div>
            </div>
            <div className="col-9 p-7 bg-primary text-light border border-dark container-fluid">
              {user && user.admin && (
                <Link to={`/interview/new`}>
                  <button className="btn btn-secondary">New Question</button>
                </Link>
              )}
              <div className="question-header container-fluid">
                <div className="h2 my-3 text-dark text-center">
                  Interview Questions
                </div>
                <div className="h3 my-3 text-dark text-center">SQL</div>
              </div>

              <QuestionList user={user} onDelete={this.handleDelete} />
            </div>
          </div>
        </div>
        {/* <button type="button" className="btn btn-primary mx-1">
          Search
        </button>
        <button type="button" className="btn btn-secondary mx-1">
          Edit
        </button> */}
      </>
    );
  }
}

export default InterviewQuestion;
