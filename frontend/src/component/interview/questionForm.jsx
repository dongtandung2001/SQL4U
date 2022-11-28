import React from "react";
import Joi from "joi";

import Form from "../common/form";
import { withRouter } from "../withRouter";
import * as interviewService from "../../services/interviewService";
import * as courseService from "../../services/courseService";

class InterviewQuestionForm extends Form {
  state = {
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

  // fetch data from database
  componentDidMount = async () => {
    const { id } = this.props.params;
    // dont fetch when posting new project.
    if (id === "new") {
      return;
    }

    const { data: interviewQuestion } =
      await interviewService.getInterviewQuestion(id);
    this.setState({
      data: {
        _id: interviewQuestion._id,
        question: interviewQuestion.question,
        answer: interviewQuestion.answer,
        topic: interviewQuestion.topic,
      },
    });
  };

  schema = Joi.object({
    _id: Joi.string(),
    topic: Joi.string().required(),
    question: Joi.string().required(),
    answer: Joi.string().required(),
  });

  doSubmit = async () => {
    const question = { ...this.state.data };
    await interviewService.saveInterviewQuestion(question);
    window.location = "/interview";
  };
  render() {
    return (
      <div className='container-fluid'>
        <form onSubmit={this.handleSumbit} style={{ height: "15rem" }}>
          {this.renderSelect("topic", "Topic", this.state.topics)}
          {this.renderInput("question", "Question")}
          {this.renderInput("answer", "Answer")}

          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default withRouter(InterviewQuestionForm);
