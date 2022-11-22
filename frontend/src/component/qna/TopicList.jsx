import React, { Component, useState } from "react";
import { info } from "./question&user";
import { topics } from "./topics";
import CreatePost from "./CreatePost";
import Question from "./Question";

function Show({ arr }) {
  return (
    arr.map((val, index) =>
      <div key={index}>

        <Question
          _id={val._id}
          userName={val.userName}
          userAvatar={val.userAvatar}
          description={val.description}
          title={val.title}
          topic={val.topic}
          date={val.date} />
      </div>

    ));
}

function TopicNavigation({ location }) {
  const [isShown, setIsShown] = useState("All");
  return (
    <div className="container-fluid body">
      <div className="row g-4">

        <div className="col-sm-3 topic-col">
          <div className="topic-logo" >
            <img src="../images/qna/q&a.png" alt="question and answer pic" width="200px" height="100px" />
          </div>
          <div className="topic-list">
            <h2 className="topic" onClick={() => setIsShown("All")}>----TOPIC----</h2>
            <ul className="list-group list-group-flush">


              {topics.map((val) => <li className="list-group-item" onClick={() => setIsShown(val.topic)}>{val.topic}</li>)}

            </ul>
          </div>
        </div>
        <div className="col-sm-7">

          <CreatePost />

          <div className="divider">

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
              <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>


          {isShown === "All" && (
            <div>
              <Show arr={location} />
            </div>
          )}

          {isShown === "Database Basic"
            && (<div><Show arr={location.filter((val) => val.topic === "Database Basic")} />
            </div>)}

          {isShown === "Basic Data Query"
            && (<div><Show arr={location.filter((val) => val.topic === "Basic Data Query")} />
            </div>)}

          {isShown === "Intermediate"
            && (<div><Show arr={location.filter((val) => val.topic === "Intermediate")} />
            </div>)}

          {isShown === "Advance SQL"
            && (<div><Show arr={location.filter((val) => val.topic === "Advance SQL")} />
            </div>)}

          {isShown === "Technical problems"
            && (<div><Show arr={location.filter((val) => val.topic === "Technical problems")} />
            </div>)}

          <nav aria-label="..." className="pagination">
            <ul class="pagination">
              <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item active" aria-current="page">
                <a class="page-link" href="#">2</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div>


        <div className="col-sm-2"> content

        </div>
      </div>
    </div>


  )
}


class TopicList extends Component {
  state = { data: [] };
  componentDidMount() {
    this.setState({ data: info });
  }

  render() {
    // const location = this.props.location;
    return (
      <TopicNavigation location={this.state.data} />
    );
  }
}

export default TopicList;