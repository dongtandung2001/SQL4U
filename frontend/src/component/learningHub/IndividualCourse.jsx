import React from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
export default function IndividualCourse() {
    const {courseId} = useParams();
    const location = useLocation();
    console.log(location.state,"individual");
    const tutorialList = location.state.tutorial.map( (tutorial, index) => {
        return (
            <div key={tutorial.id}>
                <Link
                    to={`/catalog/${courseId}/${tutorial.id}`}
                    state={tutorial}>
                    <span style={{marginRight:'10px'}}>{index+1}.</span>
                    {tutorial.title}
                </Link>
            </div>
            
        )
        
    })
    return (
        <div>
            {tutorialList}
            <div className="tutorial-project"> 
            <nav>
    <Link to="/project">
      <button className="catalog-button">Recommend Project</button>
    </Link>
  </nav>
            </div>
          
        </div>
    )
}