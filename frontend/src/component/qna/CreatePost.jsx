import React, { Component } from "react";
import Form from "../common/form";
import { info } from "./question&user";
import { topics } from "./topics";
import Joi from "joi";
import { withRouter } from "../withRouter";

class CreatePost extends Form {
    state = {
        data: {
            questionInput: "",
            topic: "",
        },

        topics: [
            { _id: "1", name: "Database Basic" },
            { _id: "2", name: "Basic Data Query" },
            { _id: "3", name: "Intermediate" },
            { _id: "4", name: "Advance SQL" },
            { _id: "5", name: "Technical problems" },

        ],

        errors:{}
    };

    schema = Joi.object({
        questionInput: Joi.string().min(10).max(3000).required().label("Question"),
        topic: Joi.string().required()
    });

    doSubmit = () => {
        const { data } = this.state;
        const userPost = { ...data };
        userPost.userName = "Mee"
        userPost.userAvatar= "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg"
        userPost.id = info.length;
        info.push(userPost);
        this.setState();
        

    };


    render() {
        return (<div className="creating-post">
            <div className="avatar">
                <img src="https://galaxylands.com.vn/wp-content/uploads/2022/10/tieu-su-ca-si-mono-13.jpg"
                    alt="user avatar" className="user-avartar" id="user-avatar" />
                <h6 id="user-name">UserName</h6>
            </div>
            <form onSubmit={this.handleSumbit}>

                {this.renderInput("questionInput", "Question")}
                {this.renderSelect("topic", "Topic", this.state.topics)}
                {this.renderButton("Post")}





            </form>

        </div>);
    }
}

export default CreatePost;