import React from 'react';
import { useLocation } from 'react-router-dom';


export default function TutorialPage() {
    const {state} = useLocation();
    console.log('hi',state);
    return (
        <div>
            <h1>{state.title}</h1>
            <p>{state.content}</p>
        </div>
    )
}