import React, { Component } from "react";
import {info} from "./question&user";

class QuestionPost extends Component {
    state = {};
    render() {
        return (
            info.map((val)=>
        <div className="question-post">
            <div className="avatar">
                <img src={val.userAvatar}
                    alt="user avatar" className="user-avartar" id="user-avatar" />
                <h6 id="user-name">{val.userName}</h6>
                <div className="dot-menu">
                    <button className="three-dot ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                        </svg>
                    </button>
                </div>

            </div>
            <div className="question-content">
                <p className="question-value">{val.questionConent} <span className="expand-content">Read More ...</span></p>
            </div>
            <div className="p-b">
                <button className="posting-btn" type="button">Rely</button>
            </div>
        </div>));
    }
}
export default QuestionPost;