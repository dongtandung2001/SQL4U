import httpService from './httpService';

const apiEndPoint = "/interview";

// get all interview questions
export function getInterviewQuestions() {
    return httpService.get(apiEndPoint);
}

// get specific interview question with given ID
export function getInterviewQuestion(id) {
    return httpService.get(apiEndPoint + '/' + id);
}

// update question description + title
// question : {}
export function saveInterviewQuestion(question) {
    if (question._id) {
        const body = { ...question };
        delete body._id;
        return httpService.put(apiEndPoint + "/" + question._id, body);
    }
    return httpService.post(apiEndPoint, question);
}


export function deleteInterviewQuestion(id) {
    return httpService.delete(apiEndPoint + "/" + id);
}