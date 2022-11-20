import React from "react";
import Joi from "joi";

import Form from "../common/form";
import './registerCSS.css'
import databasePic from '../login/loginPage/database-login.png'
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
          className="row--div row text-center shadow-sm"
        >
          <div
            style={{
              backgroundColor: 'rgba(242,243,241,0.5)',
              minHeight: "95vh",
              color: "#fff",
              transparency: '',
              borderRadius: '0px 20px 20px 0px',
              boxShadow: '10px 2px 3px 1px rgba(255, 255, 255, .2)',
              zIndex: '1'
            }}
            className="col-5 flex-column d-flex justify-content-center align-items-center"
          >
            <i 
              className="fa fa-user-circle mb-4" aria-hidden="true"
              style={{ 
                      fontSize:'4rem',
                      color: "#0d6efd"
                    }}
            ></i>
            <h2 className="mb-4">Let's start to learn!</h2>
            <form onSubmit={this.handleSumbit} style={{ height: "15rem" }}>
              <div className="mb-3">
                {this.renderInput("username", "Username")}
              </div>
              <div className="mb-3">
                {this.renderInput("password", "Password", "password")}
              </div>
              <div>
                <p className="mt-3">How strong is your database skill?</p>
                {this.renderRadio("skill", this.state.skills)}
              </div>
              <div className="d-grid">
                {this.renderButton("Create Account")}
              </div>
            </form>
          </div>
          <div className="slogan--div col-7 flex-column d-flex justify-content-center align-items-end">
            <img src={databasePic} alt="databasepic" className='background-Pic'/>
            <h1>SQL & NoSQL</h1>
            <p>When you are ahead in data</p>
            <p>You are ahead in the corporate run.</p>
            <p style={{fontWeight: '500'}}>Join us today!</p>
            <p style={{fontWeight: '500'}}>To learn more about Database Management System</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
