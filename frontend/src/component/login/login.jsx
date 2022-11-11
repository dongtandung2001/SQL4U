import React from "react";
import Joi from "joi";

import Form from "../common/form";
class Login extends Form {
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

  doSubmit = () => {
    console.log("Login button called", this.state.data);
  };
  render() {
    return (
      <div className='container-fluid'>
        <div
          style={{ background: "#68BBE3" }}
          className='row text-center shadow-sm'
        >
          <div
            style={{
              background: "#F2F3F1",
              minHeight: "85vh",
            }}
            className='col-4 flex-column d-flex justify-content-center align-items-center shadow rounded'
          >
            <i className='fa fa-user-o fa-5x'></i>
            <h2>Let's start to learn!</h2>
            <form onSubmit={this.handleSumbit}>
              {this.renderInput("username", "UserName")}
              {this.renderInput("password", "Password")}
              <p className='mt-3'>How strong is your database skill</p>
              {this.renderRadio("skill", this.state.skills)}
              {this.renderButton("Create Account")}
            </form>
          </div>
          <div className='col'></div>
        </div>
      </div>
    );
  }
}

export default Login;
