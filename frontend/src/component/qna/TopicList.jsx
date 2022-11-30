import React, { Component, useState } from "react";
import { topics } from "./topics";
import CreatePost from "./CreatePost";
import Question from "./Question";
import * as questionService from "../../services/questionService";
import * as authService from "../../services/authService";
import Pagination from "./pagination";



function Show({ arr, user, onDelete}) {

  
  //console.log(getTotalPost);
  
  

  return arr.slice(indexOfFirstPost,indexOfLastPost).map((val) => (
    <div key={val._id}>
      <Question
        _id={val._id}
        username={val.userName}
        useravatar={val.userAvatar}
        description={val.description}
        title={val.title}
        topic={val.topic}
        date={val.datePosted}
        user={user}
        onDelete={onDelete}
      />
      
    </div>
  ));
}

function TopicNavigation({ location, user, onDelete }) {
  const [isShown, setIsShown] = useState("All"); 
  
  const [currentPage, setCurrentPage]= useState(1);
  const [postsPerPage] = useState(2);

  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  
  
  const arrLength=3;
  //console.log(Show().length);

  const paginate = pageNumber=> setCurrentPage(pageNumber);

  
  

 
  return (
    <div className="container-fluid body">
      <div className="row">

        <div className="col-sm-3 topic-col">
          <div className="topic-logo">
            <img
              src="../images/qna/q&a.png"
              alt="question and answer pic"
              width="200px"
              height="100px"
            />
          </div>
          <div className="topic-list">
            <h2 className="topic" onClick={() => setIsShown("All")}>
              ----TOPIC----
            </h2>
            <ul className="list-group list-group-flush">
              {topics.map((val) => (
                <li
                  key={val.id}
                  className="list-group-item"
                  onClick={() => setIsShown(val.topic)}
                >
                  {val.topic}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-sm-7">
          <CreatePost />

          <div className="divider">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-double-down"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
              <path
                fillRule="evenodd"
                d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>

          {isShown === "All" && (
            <div>
              <Show arr={location} user={user} onDelete={onDelete}
              // indexOfFirstPost={indexOfFirstPost}
              // indexOfLastPost={indexOfLastPost}
               />
            </div>
          )}

          {isShown === "Database Basic" && (
            <div>
              
              <Show
                arr={location.filter((val) => val.topic === "Database Basic")}
                user={user}
                // indexOfFirstPost={indexOfFirstPost}
                // indexOfLastPost={indexOfLastPost}
                
                
              />
            </div>
          )}

          {isShown === "Basic Data Query" && (
            <div>
              <Show
                arr={location.filter((val) => val.topic === "Basic Data Query")}
                user={user}
                // indexOfFirstPost={indexOfFirstPost}
                // indexOfLastPost={indexOfLastPost}
                
              />
            </div>
          )}

          {isShown === "Intermediate" && (
            <div>
              <Show
                arr={location.filter((val) => val.topic === "Intermediate")}
                user={user}
                // indexOfFirstPost={indexOfFirstPost}
                // indexOfLastPost={indexOfLastPost}
                
              />
            </div>
          )}

          {isShown === "Advance SQL" && (
            <div>
              <Show
                arr={location.filter((val) => val.topic === "Advance SQL")}
                user={user}
                // indexOfFirstPost={indexOfFirstPost}
                // indexOfLastPost={indexOfLastPost}
                
              />
            </div>
          )}

          {isShown === "Technical problems" && (
            <div>
              <Show
                arr={location.filter(
                  (val) => val.topic === "Technical problems"
                )}
                user={user}
                // indexOfFirstPost={indexOfFirstPost}
                // indexOfLastPost={indexOfLastPost}
                
              />
            </div>
          )}

        {/* <Pagination postsPerPage={postsPerPage} totalPosts={arrLength} paginate={paginate}/> */}
        </div>

        <div className="col-sm-2"> content</div>
      </div>
    </div>
  );
}

class TopicList extends Component {
  state = { data: [], user: {},};
  componentDidMount = async () => {
    const { data } = await questionService.getQuestions();
    const user = await authService.getCurrentUser();
    this.setState({ data, user });
  };

  handleDelete = async () => {
    console.log("deleted");
  };

  render() {
    // const location = this.props.location;
    return (
      <TopicNavigation
        location={this.state.data}
        user={this.state.user}
        onDelete={this.handleDelete}
      />
    );
  }
}

export default TopicList;
