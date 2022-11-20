import React, { Component } from "react";
import { Link } from "react-router-dom";
import Answer from "./Answer";
import { info } from "./question&user";
import CreatePost from "./CreatePost";

class QuestionPost extends Component {
  container = React.createRef();
  state = {
    openMenu: false,
    openAnswer: false,
  };
  handleButtonClick = () => {
    this.setState((state) => {
      return {
        openMenu: !this.state.openMenu,
      };
    });
  };
  relyClick = () => {
    this.setState((state) => {
      return {
        openAnswer: !this.state.openAnswer,
      };
    });
  };
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  compnentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  handleClickOutside = (event) => {
    if (
      this.container.current &&
      !this.container.current.contains(event.target)
    ) {
      this.setState({
        openMenu: false,
      });
    }
  };

  render() {
    return info.map((val) => (
      <div className="question-post">
        <div className="avatar">
          <img
            src={val.userAvatar}
            alt="user avatar"
            className="user-avartar"
            id="user-avatar"
          />
          <h6 id="user-name">{val.userName}</h6>
          <div className="dot-menu" ref={this.container}>
            <button className="three-dot ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-three-dots-vertical"
                viewBox="0 0 16 16"
              >
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
              </svg>
            </button>
            {this.state.openMenu && (
              <div className="menu-content" id="myMenu">
                <ul className="dot-lists">
                  <li className="dot-list">Edit</li>
                  <li className="dot-list">Delete</li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="question-content">
          <p className="question-value">
            {val.questionInput}{" "}
            <span className="expand-content">Read More ...</span>
          </p>
        </div>
        <div className="p-b">
          {/* <Link to={'/qna/rely'}> */}
          <button className="posting-btn" type="button">
            Rely
          </button>
          {/* //</Link>   */}
        </div>
        {this.state.openAnswer && <Answer />}
      </div>
    ));
  }
}
export default QuestionPost;
