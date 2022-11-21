import httpService from './httpService';

const apiEndPoint = "/project";

// get all projects
export function getProjects() {
    return httpService.get(apiEndPoint);
}

// get specific project with given ID
export function getProject(id) {
    return httpService.get(apiEndPoint + '/' + id);
}

// save project
// content: {header: "...", detail: "..."}
export function saveProject(project, content) {
    if (project._id) {
        const body = { ...project };
        delete body._id;
        if (body.contents) delete body.contents;
        body.content = content;
        return httpService.put(apiEndPoint + "/" + project._id, body);
    }
    return httpService.post(apiEndPoint, project);
}