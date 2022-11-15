import React, {Component} from "react";
import {topics} from "./topics";


class TopicList extends Component{
    state = {};
   
    render(){
        return (
          <div className="col-sm-3 topic-col">
          <div className="topic-logo">
            <img src="../images/qna/q&a.png" alt="question and answer pic" width="200px" height="100px" />
          </div>
            
        <div className="topic-list">
        <h2 className="topic">----TOPIC----</h2>
        <ul className="list-group list-group-flush">
          {topics.map((linkntopic)=> <li className="list-group-item"><a className="href-topic" href={linkntopic.link}>{linkntopic.topic}</a></li>)}
          


        </ul>
      </div>
      </div>);
    }
}

export default TopicList;