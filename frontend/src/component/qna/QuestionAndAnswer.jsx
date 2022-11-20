import { func } from "joi";
import React, { Component } from "react";
import { useParams} from "react-router-dom";
import Answer from "./Answer";
import AnswerList from "./AnswerList";
import { info } from "./question&user";



const QuestionAndAnswer = ()=> {

    const {id} = useParams();

    const question = info.find(question=>question._id === id);
    console.log('hi', question);
    const replies = question.replies;
    console.log(replies);
    // state = {

    //     openMenu: false,
    //     data: {
    //         questionInput: "",
    //         topic: "",
    //         titleInput: ""
    //     },


    // };

    // componentDidMount = () =>{
    //     const {id} = useParams();
    //     console.log(id);
    // }

    // handleButtonClick = () => {
    //     this.setState((state) => {
    //         return {
    //             openMenu: !this.state.openMenu,
    //         };
    //     });
    // };

    
    
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
                        <h6 id="user-name">Vy</h6>
                        <div className="dot-menu" >
                            <button className="three-dot ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-three-dots-vertical"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                </svg>
                            </button>
                            {/* {this.state.openMenu && (
                                <div className="menu-content" id="myMenu">
                                    <ul className="dot-lists">
                                        <li className="dot-list">Edit</li>
                                        <li className="dot-list">Delete</li>
                                    </ul>
                                </div>
                            )} */}
                        </div>
                    </div>
                    <div className="question-content individual-question">
                        <p className="question-value">

                            <span className="topic-input">{question.topic}</span><br />
                            <span className="title-input">{question.title}</span><br/>
                            {question.description}
                            
                        </p>
                    </div>
                    <Answer _id={question._id}/>
                    {replies && replies.map((item) => {
                        return(
                            <AnswerList
                                userName={item.userName}
                                reply={item.reply}
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