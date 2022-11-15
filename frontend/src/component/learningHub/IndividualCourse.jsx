import React from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
export default function IndividualCourse() {
    const { courseId } = useParams();
    const location = useLocation();
    const courseName = location.state.courseName;
    const tutorialList = location.state.tutorial.map((tutorial, index) => {
        return (
            <div key={tutorial.id}>
                <Link
                    to={`/catalog/${courseId}/${tutorial.id}`}
                    state={tutorial}>
                    <span style={{ marginRight: '10px' }}>{index + 1}.</span>
                    {tutorial.title}
                </Link>
            </div>

        )

    })
    return (
        <div>
            <h2>{courseName}</h2>
            {tutorialList}
            <div className="tutorial-project">
                <nav>
                    <h3>Recommended Projects</h3>
                    <Link 
                        to={`/catalog/${courseId}/project`}
                        state ={{"courseId": courseId, "courseName": courseName}}
                    >
                        <button className="catalog-button">Recommend Project</button>
                    </Link>
                </nav>
            </div>

        </div>
    )
}