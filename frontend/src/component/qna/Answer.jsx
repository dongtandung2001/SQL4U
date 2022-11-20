import React, { Component } from "react";
import { Link } from "react-router-dom";

import Form from "../common/form";

import { info } from "./question&user";
import Joi from "joi";



class Answer extends Form {

    state = {
        data: {
            reply: "",
        },

        errors: {}

    };

    schema = Joi.object({
        reply: Joi.string().min(10).max(3000).required().label("Answer"),
        // userName: Joi.string().required(),
    });

    doSubmit = () => {
        const { data } = this.state;
        const userAnswer = { ...data };
        userAnswer.id = info.length;
        userAnswer.userName = 'Phu';
        info.forEach(element => {
            if (element._id === this.props._id) {
                element.replies.push(userAnswer)
            }
        })
    }

    // answerNe = this.props.question.map ((val) => {
    //     return (
            
    //         <div className="answer">
    //         <img className="a-userAvatar" src={"https://galaxylands.com.vn/wp-content/uploads/2022/10/tieu-su-ca-si-mono-13.jpg"}></img>

    //         <p className="a-userName">{val.replies.userName}</p>
    //         <p>{val.reply}</p>
    //         </div>
            
    //     )
    // });

    render() {
        return (

            <div className="answer-content">
                <div className="anwser">
                    <form onSubmit={this.handleSumbit}>
                        {this.renderInput("reply", "Answer")}
                        {this.renderButton("Reply")}
                    </form>
                </div>
                {/* <div className="answer-lists">
                 {info.map((val) =>
                        <div className="answer">
                            <img className="a-userAvatar" src={"https://galaxylands.com.vn/wp-content/uploads/2022/10/tieu-su-ca-si-mono-13.jpg"}></img>

                            <p className="a-userName">{val.replies.userName}</p>
                            <p>{val.replies.reply}</p>


                        </div>)} 
                       

                </div> */}
            </div>




        );
    }
}
export default Answer;