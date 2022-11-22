import { func } from "joi";
import React, { Component } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Answer from "./Answer";
import AnswerList from "./AnswerList";
import { info } from "./question&user";



const QuestionAndAnswer = () => {

    

    const { id } = useParams();
    const [doDelete,setDoDelete]=useState(info);
    const question = info.find(question => question._id === id);
    console.log('hi', question);
    const replies = question.replies;
    console.log(replies);
   



    return (
        <div>
            <div className="question-post">

                <div className="avatar question-answer">
                    <img
                        src='https://galaxylands.com.vn/wp-content/uploads/2022/10/tieu-su-ca-si-mono-13.jpg'
                        alt="user avatar"
                        className="user-avartar user-question"
                        id="user-avatar"
                    />
                    <h6 id="user-name">Vy<br /> <span className="date-created"> {question.date}</span></h6>
                    <div className="dot-menu" >
                        <button className="three-dot " data-toggle="tooltip" data-placement="top" title="Edit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-vector-pen" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828L10.646.646zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z" />
                                <path fill-rule="evenodd" d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086.086-.026z" />
                            </svg>
                        </button>
                        <button className="three-dot" data-toggle="tooltip" data-placement="top" title="Delete"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                        </svg></button>

                    </div>
                    </div>
                    <div className="question-content individual-question">
                        <p className="question-value">

                            <span className="topic-input">Topic: {question.topic}</span><br />
                            <span className="title-input">Title: {question.title}</span><br />
                            Question: {question.description}

                        </p>
                    </div>
                    <Answer _id={question._id} />
                    {replies && replies.map((item) => {
                        return (
                            <AnswerList
                                userName={item.userName}
                                reply={item.reply}
                                dateR={item.dateR}
                            />
                        )
                    })}
                    {/* <Answer/>
                     */}

                </div>

            </div>
            
            )

}
export default QuestionAndAnswer;