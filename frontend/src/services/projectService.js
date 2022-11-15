import httpService from './httpService';

const apiEndPoint = "/project";

export async function getAllProject() {
    await httpService.get(apiEndPoint).then(res => {
        console.log(res)
    })
}