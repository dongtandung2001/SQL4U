import React from "react";
import Joi from "joi";

import Form from "../common/form";
import * as userService from "../../services/userService";
import * as authService from "../../services/authService";
class Register extends Form {
  state = {
    data: {
      username: "",
      password: "",
      skill: "",
    },
    skills: [
      { name: "beginner", label: "Beginner" },
      { name: "intermediate", label: "Intermediate" },
      { name: "professional", label: "Professional" },
    ],
    errors: {},
  };

  schema = Joi.object({
    username: Joi.string().min(5).max(50).required().label("Username"),
    password: Joi.string().min(5).max(255).required().label("Password"),
    skill: Joi.string().required(),
  });

  doSubmit = async () => {
    try {
      const response = await userService.register(this.state.data);
      authService.jwtLogin(response.headers["x-auth-token"]);
      window.location = "/";
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = error.response.data;
        this.setState({ errors });
      }
    }
  };
  render() {
    return (
      <div className="container-fluid">
        <div
          style={{ background: "#68BBE3" }}
          className="row text-center shadow-sm"
        >
          <div
            style={{
              background: "#F2F3F1",
              minHeight: "85vh",
            }}
            className="col-4 flex-column d-flex justify-content-center align-items-center shadow rounded"
          >
            <i className="fa fa-user-o fa-5x"></i>
            <h2>Let's start to learn!</h2>
            <form onSubmit={this.handleSumbit}>
              {this.renderInput("username", "UserName")}
              {this.renderInput("password", "Password", "password")}
              <p className="mt-3">How strong is your database skill</p>
              {this.renderRadio("skill", this.state.skills)}
              <div className="d-grid">
                {this.renderButton("Create Account")}
              </div>
            </form>
          </div>
          <div className="col"></div>
        </div>
      </div>
    );
  }
}

export default Register;
