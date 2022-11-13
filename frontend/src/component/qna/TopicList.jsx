import React, {Component} from "react";
import {topics} from "./topics";

function LinkToTopic(props){
    return <li className="list-group-item"><a className="href-topic" href={props.link}>{props.topic}</a></li>
          
}
class TopicList extends Component{
    state = {};
   
    render(){
        return (<div className="topic-list">
        <h2 className="topic">----TOPIC----</h2>
        <ul className="list-group list-group-flush">
          {topics.map((linkntopic)=> <li className="list-group-item"><a className="href-topic" href={linkntopic.link}>{linkntopic.topic}</a></li>)}
          


        </ul>
      </div>);
    }
}

export default TopicList;