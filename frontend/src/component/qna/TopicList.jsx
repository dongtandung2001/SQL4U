import React, { Component, useState } from "react";
import { topics } from "./topics";
import CreatePost from "./CreatePost";
import Question from "./Question";
import Pagination from "../common/pagination";
import { paginate } from "../../util/paginate";
import * as questionService from "../../services/questionService";
import * as authService from "../../services/authService";

function Show({ arr, user, onDelete }) {
  return arr.map((val) => (
    <div key={val._id}>
      <Question
        _id={val._id}
        username={val.userName}
        useravatar={val.userAvatar}
        description={val.description}
        title={val.title}
        topic={val.topic}
        date={val.datePosted}
        user={user}
        onDelete={onDelete}
      />
    </div>
  ));
}

function TopicNavigation({
  location,
  user,
  onDelete,
  itemsCount,
  pageSize,
  onChange,
  currentPage,
  onPageChange,
}) {
  const [isShown, setIsShown] = useState("all");
  return (
    <div className="container-fluid body">
      <div className="row">
        <div className="col-sm-3 topic-col">
          <div className="topic-logo">
            <img
              src="../images/qna/q&a.png"
              alt="question and answer pic"
              width="200px"
              height="100px"
            />
          </div>
          <div className="topic-list">
            <h2
              className="topic"
              onClick={() => {
                onPageChange("all");
                setIsShown("all");
              }}
            >
              ----TOPIC----
            </h2>
            <ul className="list-group list-group-flush">
              {topics.map((val) => (
                <li
                  key={val.id}
                  className={
                    isShown === val._id
                      ? "list-group-item active"
                      : "list-group-item "
                  }
                  onClick={() => {
                    onPageChange(val._id);
                    setIsShown(val._id);
                  }}
                >
                  {val.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-sm-7">
          <CreatePost />

          <div className="divider">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-double-down"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
              <path
                fillRule="evenodd"
                d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>

          {isShown === "all" && (
            <div>
              <Show arr={location} user={user} onDelete={onDelete} />
            </div>
          )}

          {isShown === "sql" && (
            <div>
              <Show
                arr={location.filter((val) => val.topic === "sqll")}
                user={user}
              />
            </div>
          )}

          {isShown === "nosql" && (
            <div>
              <Show
                arr={location.filter((val) => val.topic === "nosql")}
                user={user}
              />
            </div>
          )}

          {isShown === "beginner" && (
            <div>
              <Show
                arr={location.filter((val) => val.topic === "beginner")}
                user={user}
              />
            </div>
          )}

          {isShown === "fo" && (
            <div>
              <Show
                arr={location.filter((val) => val.topic === "fo")}
                user={user}
              />
            </div>
          )}

          {isShown === "rm" && (
            <div>
              <Show
                arr={location.filter((val) => val.topic === "rm")}
                user={user}
              />
            </div>
          )}

          <Pagination
            itemsCount={itemsCount}
            pageSize={pageSize}
            onPageChange={onChange}
            currentPage={currentPage}
          />
        </div>

        <div className="col-sm-2"> content</div>
      </div>
    </div>
  );
}

class TopicList extends Component {
  state = {
    data: [],
    user: {},
    pageSize: 6,
    currentPage: 1,
    currentTopic: "all",
  };
  componentDidMount = async () => {
    const { data } = await questionService.getQuestions();
    const user = await authService.getCurrentUser();
    this.setState({ data, user });
  };

  handleDelete = async () => {
    console.log("deleted");
  };

  handleChange = (page) => {
    this.setState({ currentPage: page });
  };

  onPageChange = (topic) => {
    this.setState({ currentTopic: topic });
  };

  render() {
    // filter
    const filtered = this.state.data.filter(
      (course) => course.topic === this.state.currentTopic
    );
    // paginate
    const qna = paginate(
      this.state.data,
      this.state.currentPage,
      this.state.pageSize
    );
    console.log(this.state.currentTopic);
    return (
      <TopicNavigation
        location={qna}
        user={this.state.user}
        onDelete={this.handleDelete}
        itemsCount={
          this.state.currentTopic === "all"
            ? this.state.data.length
            : filtered.length
        }
        pageSize={this.state.pageSize}
        onChange={this.handleChange}
        currentPage={this.state.currentPage}
        onPageChange={this.onPageChange}
      />
    );
  }
}

export default TopicList;
