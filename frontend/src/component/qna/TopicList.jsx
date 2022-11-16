import React, {Component, useState} from "react";
import { info } from "./question&user";
import {topics} from "./topics";

function TopicNavigation({location}){
  const [isShown,setIsShown] = useState("All");
  return(
<div className="topic-list">
        <h2 className="topic" onClick={()=>setIsShown("All")}>----TOPIC----</h2>
    <ul className="list-group list-group-flush">
          
          <li className="list-group-item" onClick={()=>setIsShown("Database Basic")}>Topic1</li>
          <li className="list-group-item" onClick={()=>setIsShown("Basic Data Query")}>Topic2</li>
          <li className="list-group-item"onClick={()=>setIsShown("Intermediate")}>Topic3</li>
          <li className="list-group-item"onClick={()=>setIsShown("Advanace SQL")}>Topic4</li>
          <li className="list-group-item"onClick={()=>setIsShown("Technical problems")}>Topic5</li>        
          


      </ul>

      {isShown === "All" &&(
        <div>
          {/* <Show arr = {location}/> */}
        </div>
      )}
    </div>
  )
}


class TopicList extends Component{
    state = {data:[]};
    componentDidMount(){
      this.setState({data:info});
    }
   
    render(){
      const location = this.props.location;
      console.log(location);
        return (
          <div className="col-sm-3 topic-col">
          <div className="topic-logo">
            <img src="../images/qna/q&a.png" alt="question and answer pic" width="200px" height="100px" />
          </div>
          <TopicNavigation location={this.state.date}/>
            
        {/* <div className="topic-list">
        <h2 className="topic">----TOPIC----</h2>
        {/* <ul className="list-group list-group-flush">
          {topics.map((linkntopic)=> <li className="list-group-item"><a className="href-topic" href={linkntopic.link}>{linkntopic.topic}</a></li>
          


        </ul> 
      </div> */}
      </div>);
    }
}

export default TopicList;