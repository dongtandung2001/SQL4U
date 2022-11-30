import React from "react";

export default function AnswerList(props) {
  return (
    <div className="answer-lists">
      {props.user && props.user.admin && (
        <button
          className="btn btn-sm btn-danger"
          onClick={() => {
            console.log("delete commment");
          }}
        >
          Delete
        </button>
      )}
      <div className="answer-a">
          <div className="answer-img">
        <img
          className="a-userAvatar"
          src={
            "https://galaxylands.com.vn/wp-content/uploads/2022/10/tieu-su-ca-si-mono-13.jpg"
          }
        ></img></div>
        <div className="answer-info">
          <p className="a-userName">
            {props.username}
            <br /> <span className="date-created">{ }</span>
          </p>

          <p className="reply-text">{props.reply}</p>
        </div>
      </div>
    </div>
  );
}
