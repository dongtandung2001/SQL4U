import React, { Component } from "react";
import {Link} from "react-router-dom";

import "./learningHub.css"
class LearningHub extends Component {
  state = {};
  render() {
    return (
   <>

<div className="hub">
<h1>My Course!</h1>

<div className="flex-parent-element">
  <div className="flex-child-element"><h2>Enrolled Courses</h2></div>
  <div className="flex-child-element">
    <nav>
    <Link to="/catalog">
      <button className="catalog-button">Course Catalog</button>
    </Link>
  </nav>
  </div>
</div>
<button className='course-button'><i className='fa fa-star blue'></i>Introduction to Database</button>
<button className='course-button'><i className='fa fa-star blue'></i>Data Structure</button>
<button className='course-button'><i className='fa fa-star blue'></i>Database Management</button>
<button className='course-button'><i className='fa fa-star blue'></i>Administration</button>
<button className='course-button'><i className='fa fa-star blue'></i>Application Development</button>
</div>

   
   </>
    );
  }
}

export default LearningHub;