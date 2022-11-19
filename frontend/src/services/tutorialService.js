import httpService from './httpService';

const apiEndPoint = "/tutorial";

// get all tutorials 
export function getTutorials() {
    return httpService.get(apiEndPoint);
}

// get specific tutorial with id
export function getTutorial(id) {
    return httpService.get(apiEndPoint + '/' + id);
}

// save tutorial
export function saveTutorial(tutorial) {
    // update
    if (tutorial._id) {
        const body = { ...tutorial };
        delete body._id;
        return httpService.put(apiEndPoint + "/" + tutorial._id, body);
    }
    // add
    return httpService.post(apiEndPoint, tutorial);
}