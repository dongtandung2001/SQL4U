import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import * as authService from "../../services/authService";
import * as qnaService from "../../services/questionService";

export default function Question(props) {
  // const location = useLocation();
  // console.log('mes', location);
  // const { courseId } = location.state;
  //const [state, setState] = useState({});

  // useEffect(() => {
  //     const user = auth.getCurrentUser();
  //     setState(user)
  // }, []);

  const user = authService.getCurrentUser();

  const info = {
    _id: props._id,
    userName: props.username,
    userAvatar: props.useravatar,
    description: props.description,
    topic: props.topic,
    title: props.title,
    date: props.date,
  };

  return (
    <div className="question-post">
      <div className="avatar">
        <img
          src={
            "https://galaxylands.com.vn/wp-content/uploads/2022/10/tieu-su-ca-si-mono-13.jpg"
          }
          alt="user avatar"
          className="user-avartar"
          id="user-avatar"
        />
        <h6 id="user-name">
          {info.userName} <br />{" "}
          <span className="date-created">{info.date}</span>{" "}
        </h6>
      </div>
      <div className="topic-chosen">
        <p>{props.topic}</p>
      </div>
      <div
        className="question-content"
        data-toggle="tooltip"
        data-placement="top"
        title="Click here to see answers"
      >
        <Link to={`/qna/${info._id}`} className="question-link">
          <p className="question-value ">{info.title}</p>
        </Link>
      </div>
    </div>
  );
}
