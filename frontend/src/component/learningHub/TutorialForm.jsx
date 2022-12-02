import React from "react";
import Joi from "joi";
import Form from "../common/form";
import { withRouter } from "../withRouter";
import * as courseService from "../../services/courseService";
import * as tutorialService from "../../services/tutorialService";

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
    const { header, detail } = tutorial;
    if (tutorial.header) delete tutorial.header;
    if (tutorial.detail) delete tutorial.detail;
    const { data, method } = await tutorialService.saveTutorial(tutorial, {
      header,
      detail,
    });
    if (method === "add") {
      await courseService.addTutorial(courseId, data._id);
      this.props.navigate(`/catalog/${courseId}`);
    } else {
      if (data.title !== tutorial.title) {
        // delete tutorial ref in course
        await courseService.deleteTutorial(courseId, tutorial._id);
        // add tutorial ref again in course
        await courseService.addTutorial(courseId, tutorial._id);
      }
      this.props.navigate(`/catalog/${courseId}/tutorial/${tutorial._id}`);
    }
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
