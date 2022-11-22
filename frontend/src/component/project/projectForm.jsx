import React from "react";
import Joi from "joi";
import { data } from "./projects";
import Form from "../common/form";
import { withRouter } from "../withRouter";

class ProjectForm extends Form {
  state = {
    data: {
      //   title: "",
      //   difficulty: "",
      //   header: "",
      //   description: "",
    },
    difficulty: [
      { _id: "beginner", name: "Beginner" },
      { _id: "intermediate", name: "Intermediate" },
      { _id: "professional", name: "Professional" },
    ],
    errors: {},
  };

  // fetch data from database
  componentDidMount = () => {
    const { id } = this.props.params;
    // dont fetch when posting new project.
    if (id === "new") {
      return;
    }
    const project = data.find((project) => project._id === id);

    this.setState({
      data: {
        title: project.title,
        difficulty: project.difficulty,
      },
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
    console.log(this.state.data);
    const project = { ...this.state.data };
    const { header, detail } = project;
    delete project.header;
    delete project.detail;

    project.contents = [];
    project.contents.push({ header, detail });
    data.push(project);
    console.log(data);
  };
  render() {
    return (
      <div className="container-fluid">
        <form onSubmit={this.handleSumbit} style={{ height: "15rem" }}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("difficulty", "Difficulty", this.state.difficulty)}
          {this.renderInput("header", "Header")}
          {this.renderTextArea("detail", "Detail")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default withRouter(ProjectForm);
