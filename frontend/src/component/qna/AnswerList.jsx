import React from 'react';


export default function AnswerList(props) {
    return (
        <div className="answer-lists">

            <div className="answer">
                <img className="a-userAvatar" src={"https://galaxylands.com.vn/wp-content/uploads/2022/10/tieu-su-ca-si-mono-13.jpg"}></img>

                <p className="a-userName">{props.userName}</p>
                <p>{props.reply}</p>


            </div>


        </div>
    )
}
