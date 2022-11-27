import React from "react";
import Joi from "joi";
import Form from "../common/form";
import { withRouter } from "../withRouter";
import * as courseService from "../../services/courseService";
import * as tutorialService from "../../services/tutorialService";
import { useParams } from "react-router-dom";

class TutorialForm extends Form {
  state = {
    data: {},
    errors: {},
    submitButtonText: "Submit",
  };

  schema = Joi.object({
    _id: Joi.string(),
    title: Joi.string().max(50).required().label("Tutorial Name"),
    header: Joi.string().min(5).label("Header"),
    detail: Joi.string().min(5).label("Detail"),
  });

  componentDidMount = async () => {
    const { id } = this.props.params;
    if (id === "new") return;
    const { data: tutorial } = await tutorialService.getTutorial(id);
    this.setState({
      data: {
        _id: tutorial._id,
        title: tutorial.title,
      },
    });
  };
  doSubmit = async () => {
    const { courseId } = this.props.params;
    const tutorial = { ...this.state.data };
    const { header, content } = tutorial;
    if (tutorial.header) delete tutorial.header;
    if (tutorial.content) delete tutorial.content;
    const { data, method } = await tutorialService.saveTutorial(tutorial, {
      header,
      content,
    });
    if (method === "add") await courseService.addTutorial(courseId, data._id);
    this.props.navigate(`/catalog/${courseId}`);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSumbit}>
          {this.renderInput("title", "Title")}
          {this.renderInput("header", "Header")}
          {this.renderTextArea("detail", "Detail")}
          {this.renderButton(`${this.state.submitButtonText}`)}
        </form>
      </div>
    );
  }
}

export default withRouter(TutorialForm);
