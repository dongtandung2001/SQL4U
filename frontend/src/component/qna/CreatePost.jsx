import React, { Component } from "react";
import {topics} from "./topics";

class CreatePost extends Component {
    state = {};
    render() {
        return (<div className="creating-post">
            <div className="avatar">
                <img src="https://galaxylands.com.vn/wp-content/uploads/2022/10/tieu-su-ca-si-mono-13.jpg"
                    alt="user avatar" className="user-avartar" id="user-avatar" />
                <h6 id="user-name">UserName</h6>
            </div>

            <div className="input-group" id="question">
                <textarea className="form-control" placeholder="What is your question?"></textarea>
            </div>
            <div className="topic-selection">
                <select className="form-select select-topic" aria-label="Default select example">
                    <option selected>Choose topic</option>
                    {topics.map((val)=> <option value={val.id}>{val.topic}</option>)}                   
                </select>
            </div>
            <div className="p-b">
                <button className="posting-btn" type="button">Post</button>
            </div>

        </div>);
    }
}

export default CreatePost;