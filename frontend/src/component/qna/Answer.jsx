import React, { Component } from "react";
import { Link } from "react-router-dom";

import Form from "../common/form";

import { info } from "./question&user";
import Joi from "joi";
import {withRouter} from "../withRouter";



class Answer extends Form {

    state = {
        data: {
            reply: "",
          
            dateR:`${new Date().getMonth()+1}/${new Date().getDate()}/${new Date().getFullYear()}`,
        },

        errors: {}

    };

    schema = Joi.object({
        reply: Joi.string().min(10).max(3000).required().label("Answer"),
     
        dateR: Joi.required()
    });

    doSubmit = () => {
        const { data } = this.state;
        const userAnswer = { ...data };
        userAnswer.id = info.length;
        userAnswer.userName = 'Phu';
        info.forEach(element => {
            if (element._id === this.props._id) {
                element.replies.push(userAnswer)
                this.props.navigate(`/qna/${this.props._id}`);
            }
        })
    }

    

    render() {
        return (

            <div className="answer-content">
                <div className="anwser">
                    <form onSubmit={this.handleSumbit}>
                        {this.renderInput("reply", "Answer")}
                        {this.renderButton("Reply")}
                    </form>
                </div>
                
            </div>




        );
    }
}
export default withRouter(Answer);