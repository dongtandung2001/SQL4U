import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function IndividualCourse() {
    const {courseId} = useParams();
    const data = [
                    {id: 1, title: 'SQL commands', content: 'Good Morning'},
                    {id: 2, title: 'SQL theories', content: 'Good Morning'},
                    {id: 3, title: 'SQL SQL', content: 'Good Morning'},
                    {id: 4, title: 'SQL', content: 'Good Morning'},
                ];
    const tutorialList = data.map( (tutorial, index) => {
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