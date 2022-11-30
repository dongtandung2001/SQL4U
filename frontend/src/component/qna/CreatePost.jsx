import React, { Component } from "react";
import Form from "../common/form";
import Joi from "joi";
import { withRouter } from "../withRouter";
import * as questionService from "../../services/questionService";
import * as authService from "../../services/authService";
class CreatePost extends Form {
  state = {
    count: this.props.value,
    data: {},

    topics: [
      { _id: "beginner", name: "Basic Concepts" },
      { _id: "rm", name: "Relational Model" },
      { _id: "fo", name: "File Organization" },
      { _id: "nosql", name: "NoSQL" },
      { _id: "sql", name: "SQL" },
    ],

    errors: {},
  };

  componentDidMount = async () => {
    const { id } = this.props.params;
    if (id) {
      const { data: question } = await questionService.getQuestion(id);
      this.setState({
        data: {
          _id: question._id,
          topic: question.topic,
          title: question.title,
          description: question.description,
        },
      });
    }
  };

  schema = Joi.object({
    _id: Joi.string(),
    description: Joi.string().min(10).max(3000).required().label("Question"),
    topic: Joi.string().required(),
    title: Joi.string().min(10).max(3000).required().label("Title"),
  });

  doSubmit = async () => {
    const userPost = { ...this.state.data };
    const user = await authService.getCurrentUser();
    userPost.userName = user.email;
    await questionService.saveQuestion(userPost);
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
