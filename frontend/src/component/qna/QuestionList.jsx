import React, { Component } from "react";
import { Link } from "react-router-dom";
import Answer from "./Answer";
import {info} from "./question&user";
import CreatePost from "./CreatePost";




class QuestionList extends Component {
    
    state = {
       
    };
    
    
    render() {
        return (
            info.map((val,index)=>
        <div className="question-post" key={index}>
            <div className="avatar">
                <img src={val.userAvatar}
                    alt="user avatar" className="user-avartar" id="user-avatar" />
                <h6 id="user-name">{val.userName}</h6>              

            </div>
            <div className="topic-chosen"><p>{val.topic}</p></div>
            <div className="question-content" data-toggle="tooltip" data-placement="top" title="Click here to see answers">
                <p className="question-value " >{val.questionInput}</p>
                
            </div>
        
        </div>)
        
            
        

    
        );
    }
}
export default QuestionList;