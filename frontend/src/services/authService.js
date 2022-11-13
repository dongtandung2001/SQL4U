import httpService from './httpService';
import jwtDecode from 'jwt-decode';

const apiEndPoint = '/auth';
const tokenKey = 'token';

httpService.setJwt(getJwt());

export async function login(email, password) {
    const { data: jwt } = await httpService.post(apiEndPoint, {
        email: email,
        password: password,
    });
    localStorage.setItem(tokenKey, jwt);
}

export function jwtLogin(jwt) {
    localStorage.setItem(tokenKey, jwt);
}

export function logout() {
    localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
    try {
        const jwt = localStorage.getItem(tokenKey);
        return jwtDecode(jwt)
    } catch (error) {
        return null;
    }
}

export function getJwt() {
    return localStorage.getItem(tokenKey);
}

const auth = {
    login,
    jwtLogin,
    logout,
    getCurrentUser,
    getJwt,
};

export default auth;
