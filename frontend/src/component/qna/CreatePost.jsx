import React, { Component } from "react";
import Form from "../common/form";
import { info } from "./question&user";

import Joi from "joi";
import { withRouter } from "../withRouter";
import * as questionService from "../../services/questionService";
import * as authService from "../../services/authService";
class CreatePost extends Form {
  state = {
    count: this.props.value,
    data: {},

    // topics: [
    //     { _id: "1", name: "Database Basic" },
    //     { _id: "2", name: "Basic Data Query" },
    //     { _id: "3", name: "Intermediate" },
    //     { _id: "4", name: "Advance SQL" },
    //     { _id: "5", name: "Technical problems" },

    // ],
    topics: [
      { _id: "Database Basic", name: "Database Basic" },
      { _id: "Basic Data Query", name: "Basic Data Query" },
      { _id: "Intermediate", name: "Intermediate" },
      { _id: "Advance SQL", name: "Advance SQL" },
      { _id: "Technical problems", name: "Technical problems" },
    ],

    errors: {},
  };

  handleIncrement = (e) => {
    this.setState({ count: this.state.count + 1 });
  };

  schema = Joi.object({
    description: Joi.string().min(10).max(3000).required().label("Question"),
    topic: Joi.string().required(),
    title: Joi.string().min(10).max(3000).required().label("Title"),
  });

  doSubmit = async () => {
    const userPost = { ...this.state.data };
    const user = await authService.getCurrentUser();
    userPost.userName = user.email;
    questionService.saveQuestion(userPost);
    // alert("New question is created");
    window.location = "/qna";
  };

  render() {
    return (
      <div className="creating-post">
        <div className="avatar">
          <img
            src="https://galaxylands.com.vn/wp-content/uploads/2022/10/tieu-su-ca-si-mono-13.jpg"
            alt="user avatar"
            className="user-avartar"
            id="user-avatar"
          />
          <h6 id="user-name">UserName</h6>
        </div>
        <form onSubmit={this.handleSumbit}>
          {this.renderInput("title", "Question")}
          {this.renderSelect("topic", "Topic", this.state.topics)}
          {this.renderTextArea("description", "Description")}
          {this.renderButton("Post")}
        </form>
      </div>
    );
  }
}

export default withRouter(CreatePost);
