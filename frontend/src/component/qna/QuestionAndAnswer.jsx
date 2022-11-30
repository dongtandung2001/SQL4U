import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Answer from "./Answer";
import AnswerList from "./AnswerList";

import * as questionService from "../../services/questionService";
import * as authService from "../../services/authService";
import { Link } from "react-router-dom";

const QuestionAndAnswer = () => {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetch = async () => {
      const { data } = await questionService.getQuestion(id);
      setQuestion(data);
      const user = await authService.getCurrentUser();
      setUser(user);
    };
    fetch();
  }, [id]);

  const topics = [
    { _id: "beginner", name: "Basic Concepts" },
    { _id: "rm", name: "Relational Model" },
    { _id: "fo", name: "File Organization" },
    { _id: "nosql", name: "NoSQL" },
    { _id: "sql", name: "SQL" },
  ];

  return (
    <div>
      {question && (
        <div className='question-post'>
          <div className='avatar question-answer'>
            <img
              src='https://galaxylands.com.vn/wp-content/uploads/2022/10/tieu-su-ca-si-mono-13.jpg'
              alt='user avatar'
              className='user-avartar user-question'
              id='user-avatar'
            />
            <h6 id='user-name'>
              {question.userName}
              <br /> <span className='date-created'> {question.date}</span>
            </h6>
            <div className='dot-menu'>
              {user && user.email === question.userName && (
                <Link to={`/qna/edit/${question._id}`}>
                  <button
                    className='three-dot '
                    data-toggle='tooltip'
                    data-placement='top'
                    title='Edit'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      className='bi bi-vector-pen'
                      viewBox='0 0 16 16'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828L10.646.646zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z'
                      />
                      <path
                        fillRule='evenodd'
                        d='M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086.086-.026z'
                      />
                    </svg>
                  </button>
                </Link>
              )}
              {user && (user.admin || user.email === question.userName) && (
                <button
                  onClick={async () => {
                    await questionService.deleteQuestion(question._id);
                    window.location = "/qna";
                  }}
                  className='three-dot'
                  data-toggle='tooltip'
                  data-placement='top'
                  title='Delete'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    className='bi bi-trash-fill'
                    viewBox='0 0 16 16'
                  >
                    <path d='M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z' />
                  </svg>
                </button>
              )}
            </div>
          </div>
          <div className='individual-question'>
            <p className='question-value'>
              <span className='topic-input'>
                Topic:{" "}
                {topics.find((topic) => topic._id === question.topic).name}
              </span>
              <br />
              <span className='title-input'>Title: {question.title}</span>
              <br />
              <span className='question-des'>
                Description:{" "}
                {question.description.split("\n").map((q) => (
                  <p key={Math.random}>{q}</p>
                ))}
              </span>
            </p>
          </div>
          <div className='divider'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-chevron-double-down'
              viewBox='0 0 16 16'
            >
              <path
                fillRule='evenodd'
                d='M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
              />
              <path
                fillRule='evenodd'
                d='M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
              />
            </svg>
          </div>
          <Answer question={question} />
          {question.replies.map((reply) => (
            <React.Fragment key={reply._id}>
              <AnswerList
                questionId={id}
                _id={reply._id}
                username={reply.userName}
                reply={reply.reply}
                date={reply.datePosted}
                user={user}
              />
            </React.Fragment>
          ))}

          {/* <Answer/>
           */}
        </div>
      )}
    </div>
  );
};
export default QuestionAndAnswer;
