import React, { Component } from "react";
import {BsFillCheckCircleFill} from 'react-icons/bs';
import './recommendedProjects.css';

class IndividualProject extends Component {
  state = {};
  render() {
    return( 
      <div className='project-title-div'>
        <h5 className='project-title'>
          <span style = {{ marginRight: "10px"}}>{this.props.count}.</span>
          {this.props.title}
        </h5>
        <button type='button' className="check-button"><BsFillCheckCircleFill className='check-icon' /></button>
      </div>    
    );
  }
}

export default IndividualProject;
