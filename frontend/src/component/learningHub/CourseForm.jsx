import React from "react";
import Joi from "joi";
import Form from "../common/form";
import { withRouter } from "../withRouter";
import * as courseService from "../../services/courseService";

class CourseForm extends Form {
  state = {
    data: {},
    errors: {},
    topics: [
      { _id: "beginner", name: "Basic Concepts" },
      { _id: "rm", name: "Relational Model" },
      { _id: "fo", name: "File Organization" },
      { _id: "nosql", name: "NoSQL" },
      { _id: "sql", name: "SQL" },
    ],
    submitButtonText: "Submit",
  };

  schema = Joi.object({
    topic: Joi.string().max(50).required().label("Topic"),
    name: Joi.string().min(5).max(50).required().label("Courses Name"),
    teacher: Joi.string().min(5).max(50).required().label("Teacher Name"),
    length: Joi.string().min(5).max(255).required().label("Total Time"),
  });

  componentDidMount = async () => {
    const { id } = this.props.params;
    if (id === "new") return;

    const { data: courseObj } = await courseService.getCourse(id);

    this.setState({
      data: {
        topic: courseObj.topic,
        name: courseObj.name,
        teacher: courseObj.teacher,
        length: courseObj.length,
      },
      _id: courseObj._id,
    });
  };
  doSubmit = async () => {
    const { data } = this.state;
    const course = { ...data };

    if (this.state._id === "new") {
      courseService.addNewCourse(course);
    }

    if (this.state._id !== "new") {
      course._id = this.state._id;
      const isSaved = await courseService.saveCourse(course);
      if (isSaved.statusText === "OK") {
        this.setState({ submitButtonText: "Saved" });
      }
    }
  };
  navigateBack = () => {
    this.props.navigate(-1);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSumbit}>
          {this.renderSelect("topic", "Topic", this.state.topics)}
          {this.renderInput("name", "Course Name")}
          {this.renderInput("teacher", "Teacher Name")}
          {this.renderInput("length", "Total Time")}
          {this.renderButton(`${this.state.submitButtonText}`)}
        </form>
        <button
          className="btn btn-primary rounded-pill custom-transition"
          style={{ marginTop: "8px" }}
          onClick={this.navigateBack}
        >
          Back to Catalog
        </button>
      </div>
    );
  }
}

export default withRouter(CourseForm);
