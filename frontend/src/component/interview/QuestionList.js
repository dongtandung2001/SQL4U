import './interview.css';
import { useState } from "react";

function QuestionList() {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if(selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  }
  return (
    <div className="question-container">
        {interviewQuestions.map((item, i) => (
          <div className="q">
            <div className="question">
              <h3>Q{i+1}. {item.question}</h3>
            </div>
            <div className="text-end text-black-50 mx-4 answer-container">
              Answer
              <button className="answer-button mx-2"
              onClick={() => toggle(i)}>
                {selected === i ?  "-": "+"}
              </button>
            </div>
            <div className="text-center">
              <div className={selected === i ? "content show" : "content"}>
                {item.answer}
              </div>
            </div>
            <button className="text-center mx-4 save-btn">Save Question</button>
          </div>
        ))}
      </div>
  )
}

const interviewQuestions = [
  {
    id: 1,
    question: "Briefly explain what database is",
    answer: "Database is an organized collection of related data where the data is stored and organized to serve some specific purpose.\n For example, A librarian maintain a database of all the information related to the books that are available in the library."
  },
  {
    id: 2,
    question: "List advantages of SQL",
    answer: "1)Simple SQL queries can be used to retrieve a large amount of data from the database very quickly and efficiently. \nSQL is easy to learn and almost every DBMS supports SQL. \nIt is easier to manage the database using SQL as no large amount of coding is required."
  },
  {
    id: 3,
    question: "Define cursor: ",
    answer: "Cursor is a temporary work area that stores the data, as well as the result set, occurred after manipulation of data retrieved. A cursor can hold only one row at a time."
  },
  {
    id: 4,
    question: "What is JOIN operation?",
    answer: "Join is the process of deriving the relationship between different tables by combining columns from one or more tables having common values in each. When a table joins with itself, it is known as Self Join."
  },
  {
    id: 5,
    question: "What is Atomicity in RDBMS?",
    answer: "Atomicity is the condition where either all the actions of the transaction are performed or none. This means, when there is an incomplete transaction, the database management system itself will undo the effects done by the incomplete transaction."
  },
  {
    id: 6,
    question: "What is database partitioning?",
    answer: "Database partitioning is the process of partitioning tables, indexes into smaller pieces in order to manage and access the data at a finer level\n This process of partitioning reduces the cost of storing a large amount of data as well as enhances the performance and manageability."
  },
  {
    id: 7,
    question: "Explain the Primary Key",
    answer: "Primary Key is that column of the table whose every row data is uniquely identified. Every row in the table must have a primary key and no two rows can have the same primary key. Primary key value can never be null nor can it be modified or updated."
  }
]

export default QuestionList;