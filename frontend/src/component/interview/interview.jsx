import React, { Component } from "react";
import "./interview.css";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { BsQuestionCircleFill } from "react-icons/bs";
import { BsSuitHeartFill } from "react-icons/bs";
import Interview from "./interview.png";
import QuestionList from "./QuestionList";
import { Link } from "react-router-dom";
import * as interviewService from "../../services/interviewService";
import * as userService from "../../services/userService";
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
    pageSize: 4,
  };

  handleDelete = async (id) => {
    // call backend to delete question
    await interviewService.deleteInterviewQuestion(id);
    window.location = "/interview";
  };

  handleChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleTopicChange = async (topic) => {
    if (topic === "saved") {
      const response = await Promise.all(
        this.state.user.savedQuestion.map(async (question) => {
          const { data } = await interviewService.getInterviewQuestion(
            question._id
          );
          return data;
        })
      );
      this.setState({ saved: response });
    }
    this.setState({ currentTopic: topic, currentPage: 1 });
  };

  handleSave = async (questionId) => {
    await userService.saveQuestion(this.state.user._id, questionId);
    window.location = "/interview";
  };

  handleUnsave = async (questionId) => {
    await userService.unsaveQuestion(this.state.user._id, questionId);
    window.location = "/interview";
    this.setState({ currentTopic: "saved" });
  };

  componentDidMount = async () => {
    const { data } = await interviewService.getInterviewQuestions();
    const { data: user } = await userService.getUser(
      localStorage.getItem("token")
    );
    this.setState({ user });
    this.setState({ data: data });
  };
  renderCurrTopic() {
    if(this.state.currentTopic === 'beginner') {
      return <div>Basic Concepts</div>;
    } else if(this.state.currentTopic === 'rm') {
      return <div>Relational Model</div>;
    } else if(this.state.currentTopic === 'fo') {
      return <div>File Organization</div>;
    } else if(this.state.currentTopic === 'nosql') {
      return <div>NoSQL</div>;
    } else if(this.state.currentTopic === 'sql') {
      return <div>SQL</div>;
    } else if(this.state.currentTopic === 'all') {
      return <div>All Topics</div>;
    }
  }
  render() {
    const { user, data } = this.state;

    // filter
    let filtered = data.filter(
      (course) => course.topic === this.state.currentTopic
    );
    if (this.state.currentTopic === "all" && filtered.length === 0)
      filtered = this.state.data;

    if (this.state.currentTopic === "saved") {
      filtered = this.state.saved;
    }

    // paginate
    const question = paginate(
      filtered,
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
                <h1>TOPICS</h1>
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
              <button
                onClick={() => this.handleTopicChange("saved")}
                className="sidebar-common-questions-btn"
              >
                <BsSuitHeartFill />
                Saved Questions
              </button>{" "}
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
              <div className="h3 my-3 text-dark text-center">{this.renderCurrTopic()}</div>
            </div>

            <QuestionList
              user={user}
              onDelete={this.handleDelete}
              question={question}
              onSave={this.handleSave}
              onUnsave={this.handleUnsave}
              topic={this.state.currentTopic}
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
