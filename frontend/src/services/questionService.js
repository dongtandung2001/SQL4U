import httpService from './httpService';

const apiEndPoint = "/qna";

// get all questions
export function getQuestions() {
    return httpService.get(apiEndPoint);
}

// get specific question with given ID
export function getQuestion(id) {
    return httpService.get(apiEndPoint + '/' + id);
}

// update question description + title
// question : {}
export function saveQuestion(question) {
    if (question._id) {
        const body = { ...question };
        delete body._id;
        return httpService.put(apiEndPoint + "/" + question._id, body);
    }
    return httpService.post(apiEndPoint, question);
}

// post reply
// reply: {userName: "...", reply: "..."}
export function reply(question, reply) {
    const body = { ...question };
    delete body._id;
    delete body.datePosted;
    delete body.__v;
    body.reply = reply;
    console.log('body', body);
    return httpService.put(apiEndPoint + "/" + question._id, body)
}

export function deleteQuestion(id) {
    return httpService.delete(apiEndPoint + "/" + id);
}