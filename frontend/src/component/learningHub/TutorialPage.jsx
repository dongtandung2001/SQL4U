import React from 'react';
import { useLocation } from 'react-router-dom';


export default function TutorialPage() {
    const {state} = useLocation();
    console.log('hi',state);
    const listContent = state.content.map((content) =>
    <li key={content.toString()}>
      {content}
    </li>
    );
    return (
        <div>
            <h1>{state.title}</h1>
            <ul>{listContent}</ul>
            {/* <p>{state.content[0]}</p>
            <p>{state.content[1]}</p> */}
        </div>
    )
}