import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {tutorial} from './ tutorial';
export default function IndividualCourse() {
    const {courseId} = useParams();
    const tutorialList = tutorial.map( (tutorial, index) => {
        return (
            <div key={tutorial.id}>
                <Link
                    
                    to={`/catalog/${courseId}/${'tutorial'+tutorial.id}`}
                    state={tutorial}
                >
                    <span style={{marginRight:'10px'}}>{index+1}.</span>
                    {tutorial.title}
                </Link>
            </div>
        )
        
    })
    return (
        <div>
            {tutorialList}
        </div>
    )
}