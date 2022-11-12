import React from 'react';
import { useLocation } from 'react-router-dom';
import data from './projects';

export default function ProjectPage() {
    const location = useLocation();

    return (
        <div className="container">
            <h1>{location.state.content.title}</h1>
            <p>{location.state.content.content}</p>
            <button type='submit'>Submit</button>
        </div>
    )
}