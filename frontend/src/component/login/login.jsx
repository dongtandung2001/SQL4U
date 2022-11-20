import React from "react";
import Joi from "joi";
import './loginCSS.css';
import Form from "../common/form";
import auth from "../../services/authService";
import databasePic from './loginPage/database-login.png'

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
          className="row-div row text-center shadow-sm"
        >
          
          <div className="slogan-div col-7 flex-column d-flex justify-content-center align-items-start">
            <img src={databasePic} alt="databasepic" className='backgroundPic'/>
            <h1>SQL & NoSQL</h1>
            <p>When you are ahead in data</p>
            <p>You are ahead in the corporate run.</p>
            <p style={{fontWeight: '500'}}>Join us today!</p>
            <p style={{fontWeight: '500'}}>To learn more about Database Management System</p>
          </div>
          
          <div
            style={{
              backgroundColor: 'rgba(242,243,241,0.5)',
              minHeight: "95vh",
              color: "#fff",
              transparency: '',
              borderRadius:'20px 0 0 20px',
              boxShadow:'-10px 2px 3px 1px rgba(255, 255, 255, .2)',
              zIndex:'1'
            }}
            className="col flex-column d-flex justify-content-center align-items-center"
          >
            <i 
              className="fa fa-user-circle mb-4" aria-hidden="true"
              style={{ 
                      fontSize:'4rem',
                      color: "#0d6efd"
                    }}
            ></i>
            <h2 className="mb-4">Welcome Back!</h2>
            <form onSubmit={this.handleSumbit}>
              <div className="mb-3">
                {this.renderInput("username", "UserName")}
              </div>
              <div className="mb-3">
                {this.renderInput("password", "Password", "password")}
              </div>

              <div className="d-grid">{this.renderButton("Login")}</div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

{/* <div
          style={{ background: "rgba(104,187,277,0.9)" }}
          className="row text-center shadow-sm"
        >
          <div className="col"></div>
          <div
            style={{
              backgroundColor: 'rgba(242,243,241,0.6)',
              minHeight: "89vh",
              color: "#fff",
              transparency: '',
              borderRadius:'20px 0 0 20px',
              boxShadow:'-10px 2px 3px 1px grba(255,255,255,0.8)'
            }}
            className="col-5 flex-column d-flex justify-content-center align-items-center"
          >
            <i 
              className="fa fa-user-circle mb-4" aria-hidden="true"
              style={{ 
                      fontSize:'4rem',
                      color: "#2D9BFE"
                    }}
            >
            </i>
            <h2 className="mb-2">Welcome Back!</h2>
            <form onSubmit={this.handleSumbit}>
                <div className="mb-3">
                  {this.renderInput("email", "Email", "email")}
                </div>
                <div className="mb-3">
                  {this.renderInput("password", "Password", "password")}
                </div>
                
              <div className="d-grid">{this.renderButton("Login")}</div>
            </form>
          </div>
        </div> */}
