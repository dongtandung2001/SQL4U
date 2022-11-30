import httpService from './httpService';

const apiEndPoint = "/users";

export function register(user) {
    return httpService.post(apiEndPoint, {
        email: user.username,
        password: user.password,
        skill: user.skill
    });
}

export function getUser(token) {
    return httpService.get(apiEndPoint + '/me', {
        headers: {
            'x-auth-token': token,
        }
    })
}

// finish a project
export function finishProject(userId, projectId) {
    return httpService.post(apiEndPoint + "/project/" + userId, { id: projectId });
}

// uncheck finished project
export function uncheckFinishProject(userId, projectId) {
    return httpService.put(apiEndPoint + "/project/" + userId, { id: projectId });
}

// save an interview question
export function saveQuestion(userId, questionId) {
    return httpService.post(apiEndPoint + "/interview/" + userId, { id: questionId });
}

// unsave an interview question project
export function unsaveQuestion(userId, questionId) {
    return httpService.put(apiEndPoint + "/interview/" + userId, { id: questionId });
}
