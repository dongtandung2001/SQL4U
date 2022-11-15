import React from "react";
import Joi from "joi";
import Form from "../common/form";
import {coursesCard} from "./data";
import {withRouter} from "../withRouter";
import auth from "../../services/authService";

class CourseForm extends Form {
  state = {
    data: {
    topic: "",
    coursesName: "",
    name: "",
    length:""
    },
    errors: {},
  };

  schema = Joi.object({
    topic: Joi.string().min(5).max(50).required().label("Topic"),
    coursesName: Joi.string().min(5).max(50).required().label("Courses Name"),
    name: Joi.string().min(5).max(50).required().label("Teacher Name"),
    length: Joi.string().min(5).max(255).required().label("Total Time"),
  });

  doSubmit = () => {
      const { data } = this.state;
      console.log(data);
      const course = {...data};
      course.id = coursesCard.length;
      coursesCard.push(course);
      this.props.navigate("/catalog");
  };
  render() {
    return (
<div>
      <form onSubmit={this.handleSumbit}>
        {this.renderInput("topic","Topic")}
        {this.renderInput("coursesName","Course Name")}
        {this.renderInput("name","Teacher Name")}
        {this.renderInput("length","Total Time")}
        {this.renderButton("Submit")}
      </form>
</div>
    );
  }
}

export default withRouter(CourseForm);
