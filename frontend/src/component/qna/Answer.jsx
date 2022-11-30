import React from "react";
import Form from "../common/form";
import Joi from "joi";
import * as questionService from "../../services/questionService";
import * as authService from "../../services/authService";
import { withRouter } from "../withRouter";

class Answer extends Form {
  state = {
    data: {},
    errors: {},
  };

  schema = Joi.object({
    reply: Joi.string().min(10).max(3000).required().label("Answer"),
  });

  doSubmit = async () => {
    // get question object
    const question = { ...this.props.question };
    delete question.replies;

    // get reply
    const { data: userAnswer } = { ...this.state };
    // get username of ppl going to reply
    const user = await authService.getCurrentUser();

    userAnswer.userName = user.email;

    // reply using questionService
    try {
      await questionService.reply(question, userAnswer);
    } catch (error) {
      console.log("error", error);
    }
    // force render dum em =))
    // this.props.navigate(`/qna/${this.props.question._id}`);
    window.location = "/qna/" + this.props.question._id;
  };

  render() {
    return (
      <div className="answer-content">
        <div className="anwser">
          <form onSubmit={this.handleSumbit}>
            {this.renderTextArea("reply", "Reply")}
            {this.renderButton("Reply")}
          </form>
        </div>
      </div>
    );
  }
}
export default withRouter(Answer);
