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
export async function saveProject(project, content) {
    if (project._id) {
        const body = { ...project };
        delete body._id;
        if (body.contents) delete body.contents;
        body.content = content;
        const { data } = await httpService.put(apiEndPoint + "/" + project._id, body);
        return { data, mode: "update" };
    }
    const { data } = await httpService.post(apiEndPoint, project);
    return { data, mode: "add" };
}

// delete content of a project
// content :{header, detail}
export function deleteContent(projectId, contentId) {
    return httpService.put(apiEndPoint + "/content/" + projectId, { id: contentId });
}

// delete project with id
export async function deleteProject(id) {
    return await httpService.delete(apiEndPoint + '/' + id);
}