import React, { Component } from "react";
import "./interview.css";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { BsQuestionCircleFill } from "react-icons/bs";
import { BsSuitHeartFill } from "react-icons/bs";
import Interview from "./interview.png";
import QuestionList from "./QuestionList";
import { Link } from "react-router-dom";
import * as authService from "../../services/authService";
import * as interviewService from "../../services/interviewService";
import Pagination from "../common/pagination";
import { paginate } from "../../util/paginate";

class InterviewQuestion extends Component {
  state = {
    data: [],
    topics: [
      { _id: "beginner", name: "Basic Concepts" },
      { _id: "rm", name: "Relational Model" },
      { _id: "fo", name: "File Organization" },
      { _id: "nosql", name: "NoSQL" },
      { _id: "sql", name: "SQL" },
    ],
    currentTopic: "all",
    currentPage: 1,
    pageSize: 10,
  };

  handleDelete = async (id) => {
    // call backend to delete question
    await interviewService.deleteInterviewQuestion(id);
    window.location = "/interview";
  };

  handleChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleTopicChange = (topic) => {
    this.setState({ currentTopic: topic });
  };

  componentDidMount = async () => {
    const user = authService.getCurrentUser();
    const { data } = await interviewService.getInterviewQuestions();
    this.setState({ user });
    this.setState({ data: data });
  };

  render() {
    const { user, data } = this.state;

    // filter
    const filtered = data.filter(
      (course) => course.topic === this.state.currentTopic
    );

    // paginate
    const question = paginate(
      this.state.data,
      this.state.currentPage,
      this.state.pageSize
    );
    return (
      <div className="container-fluid grid my-1">
        <div className="row">
          <div className="h-100 col-3 p-5 bg-primary text-opacity-100 grid text-center border border-dark sidebar-container">
            <div>
              <img src={Interview} className="interview-image" />
            </div>
            <div className="display-4">
              <button
                onClick={() => this.handleTopicChange("all")}
                className="btn btn-primary"
              >
                <h1>TOPIC</h1>
              </button>
            </div>
            {this.state.topics.map((topic) => (
              <h4 key={topic._id}>
                <button
                  onClick={() => this.handleTopicChange(topic._id)}
                  className="btn btn-primary"
                >
                  {topic.name}
                </button>
              </h4>
            ))}
            <div className="h5">
                <button className="sidebar-common-questions-btn">
                  <BsQuestionCircleFill />
                </button>{" "}
                Common Questions
              </div>
              <div className="h5">
                <button className="sidebar-common-questions-btn">
                  <BsSuitHeartFill />
                </button>{" "}
                Saved Questions
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

            <QuestionList
              user={user}
              onDelete={this.handleDelete}
              question={
                this.state.currentTopic === "all" ? this.state.data : filtered
              }
            />
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
        </div>
      </div>
    );
  }
}

export default InterviewQuestion;
