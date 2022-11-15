import React from "react";
import Joi from "joi";

import Form from "../common/form";
import auth from "../../services/authService";
class Login extends Form {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };

  schema = Joi.object({
    username: Joi.string().min(5).max(50).required().label("Username"),
    password: Joi.string().min(5).max(255).required().label("Password"),
  });

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.login(data.username, data.password);
      window.location = "/";
    } catch (error) {
      if (error.response && error.response.status === 401) {
        const errors = { ...this.state.errors };
        errors.username = error.response.data;
        this.setState({ errors });
      }

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
          <div className="col"></div>
          <div
            style={{
              background: "#F2F3F1",
              minHeight: "85vh",
            }}
            className="col-4 flex-column d-flex justify-content-center align-items-center shadow rounded"
          >
            <i className="fa fa-user-o fa-5x mb-5"></i>
            <h2 className="mb-4">Welcome Back!</h2>
            <form onSubmit={this.handleSumbit}>
              {this.renderInput("username", "UserName")}
              {this.renderInput("password", "Password")}
              <div className="d-grid">{this.renderButton("Login")}</div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
