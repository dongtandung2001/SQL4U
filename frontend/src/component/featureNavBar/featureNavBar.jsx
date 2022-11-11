import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "../withRouter";

class FeatureNavBar extends Component {
  state = {};

  getCurrentPage(feature) {
    if (this.props.location.pathname === feature) {
      return "badge bg-primary fs-5";
    } else {
      return "badge bg-secondary fs-5";
    }
  }
  render() {
    console.log(this.props.location.pathname);
    return (
      <nav className='navbar navbar-expand-sm'>
        <div className='container-fluid'>
          <div className='navbar-nav ms-auto'>
            <Link
              className='nav-item nav-link mt-2 '
              aria-current='page'
              to='/hub'
            >
              <span className={this.getCurrentPage("/hub")}>Learning Hub</span>
            </Link>
            <Link
              className='nav-item nav-link mt-2 '
              aria-current='page'
              to='/interview'
            >
              <span className={this.getCurrentPage("/interview")}>
                Interview Question
              </span>
            </Link>
            <Link
              className='nav-item nav-link mt-2 '
              aria-current='page'
              to='/project'
            >
              <span className={this.getCurrentPage("/project")}>
                Recommend Project
              </span>
            </Link>
            <Link
              className='nav-item nav-link mt-2 '
              aria-current='page'
              to='/qna'
            >
              <span className={this.getCurrentPage("/qna")}>Q&A</span>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(FeatureNavBar);
