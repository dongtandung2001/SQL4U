import "./interview.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function QuestionList({ user, onDelete, question, onSave, onUnsave, topic }) {
  const [selected, setSelected] = useState(null);
  // const [question, setQuestion] = useState(null);
  // useEffect(() => {
  //   const fetch = async () => {
  //     const { data } = await interviewService.getInterviewQuestions();
  //     setQuestion(data);
  //   };
  //   fetch();
  // }, []);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className="container">
      {question &&
        question.map((item, i) => (
          <div className="question" key={item._id}>
            <div>
              <h3>
                Q{i + 1}. {item.question}
                {user && user.admin && (
                  <span>
                    <Link to={`/interview/${item._id}`}>
                      <button className="btn btn-primary ms-2 me-2">Edit</button>
                    </Link>
                    <button
                      onClick={() => onDelete(item._id)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </span>
                )}
              </h3>
            </div>
            <div className="text-end text-black mx-4 answer-container">
              Answer
              <button className="answer-button mx-2" onClick={() => toggle(i)}>
                {selected === i ? "-" : "+"}
              </button>
            </div>
            <div className="text-center">
              <div className={selected === i ? "content show" : "content"}>
                {item.answer}
              </div>
            </div>
            {topic !== "saved" && (
              <button
                onClick={() => onSave(item._id)}
                className="text-center mx-4 save-btn"
              >
                Save Question
              </button>
            )}
            {topic === "saved" && (
              <button
                onClick={() => onUnsave(item._id)}
                className="text-center mx-4 save-btn"
              >
                Unsave Question
              </button>
            )}
          </div>
        ))}
    </div>
  );
}

export default QuestionList;
