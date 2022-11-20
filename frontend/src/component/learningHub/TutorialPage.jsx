import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import "./learningHub.css";

import { tutorial } from './ tutorial'

export default function TutorialPage() {
    // const {state} = useLocation();
    const {tutorialId} = useParams();
    // console.log('hi',tutorialId);
    //location.filter((course) => course.topic === "basic")
    const tutorials = tutorial.filter((content) => content.id === tutorialId);
     console.log('hi',tutorials.length)
     
    return (
        <div>
            <h1 className="tutorial-title">{tutorials[0].title}</h1>
            {/* <ul className="tutorial-title">{tutorials[0].content}</ul> */}
            <div>
                {tutorials[0].content.map((contents,index) => (
                    <li key = {index} className="tutorial-title">{contents.split("\n")}</li>
                ))}
            </div>

        </div>
    )
}