import httpService from './httpService';

const apiEndPoint = "/course";

export function getCourses() {
    return httpService.get(apiEndPoint);
}

export function getCourse(id) {
    return httpService.get(apiEndPoint + '/' + id);
}


// edit course
export function saveCourse(project) {
    if (course._id) {
        const body = { ...project };
        delete body._id;
        return httpService.put(apiEndPoint + "/" + project._id, body);
    }
    return httpService.post(apiEndPoint, project);
}

// add a new project to course
export function addProject(id, project) {
    return httpService.put(apiEndPoint + '/project' + id, project)
}

// add a new tutorial to course
export function addTutorial(id, tutorial) {
    return httpService.put(apiEndPoint + '/tutorial' + id, tutorial)
}
