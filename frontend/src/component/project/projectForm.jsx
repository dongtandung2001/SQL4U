import React from "react";
import Joi from "joi";
import Form from "../common/form";
import { withRouter } from "../withRouter";
import * as projectService from "../../services/projectService";
import * as courseService from "../../services/courseService";

class ProjectForm extends Form {
  state = {
    data: {},
    difficulty: [
      { _id: "beginner", name: "Beginner" },
      { _id: "intermediate", name: "Intermediate" },
      { _id: "professional", name: "Professional" },
    ],
    errors: {},
  };

  // fetch data from database
  componentDidMount = async () => {
    const { id, courseId } = this.props.params;
    this.setState({ courseId });
    // dont fetch when posting new project.
    if (id === "new") {
      return;
    }

    const { data: projectObj } = await projectService.getProject(id);

    this.setState({
      data: {
        title: projectObj.title,
        difficulty: projectObj.difficulty,
      },
      contents: projectObj.contents,
      _id: projectObj._id,
    });
  };

  schema = Joi.object({
    title: Joi.string().min(5).max(50).required().label("Title"),
    difficulty: Joi.string().min(5).max(255).required().label("Difficulty"),
    detail: Joi.string().label("Detail"),
    header: Joi.string().max(255).label("Header"),
  });

  doSubmit = async () => {
    // add content to contents
    // content : {header, detail}
    const project = { ...this.state.data };
    const { header, detail } = project;

    delete project.header;
    delete project.detail;

    if (this.state._id) {
      project._id = this.state._id;
    }
    const { data, mode } = await projectService.saveProject(project, {
      header,
      detail,
    });

    if (mode === "add") {
      try {
        await courseService.addProject(this.state.courseId, data._id);
        // this.props.navigate(`/catalog/${this.state.courseId}/project`);
        this.props.navigate(-1);
      } catch (ex) {
        console.log(ex.response);
      }
    } else {
      // update project ref in course
      await courseService.deleteProject(this.state.courseId, project._id);
      await courseService.addProject(this.state.courseId, project._id);
      // window.location = `/catalog/${this.state.courseId}/project/${project._id}`;
      this.props.navigate(-1);
    }

    //
    // courseService.getProject(_id);
  };

  navigateBack = () => {
    this.props.navigate(-1);
  };

  render() {
    return (
      <div className="container-fluid">
        <form onSubmit={this.handleSumbit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("difficulty", "Difficulty", this.state.difficulty)}
          {this.renderInput("header", "Header")}
          {this.renderTextArea("detail", "Detail")}
          {this.renderButton("Save")}
        </form>
        <button
          className="btn btn-primary rounded-pill"
          style={{ marginTop: "8px", display: "block"}}
          onClick={this.navigateBack}
        >
          Go Back
        </button>
      </div>
    );
  }
}

export default withRouter(ProjectForm);
