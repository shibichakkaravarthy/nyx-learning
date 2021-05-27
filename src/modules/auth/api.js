import axios from 'axios';

export const signin = (emailId, password) => {
    return axios.post("http://localhost:5000/auth/signin", {emailId, password})
}

export const signup = (emailId, password, role) => {
    return axios.post("http://localhost:5000/auth/signup", {emailId, password, role})
}

export const refreshToken = (token) => {
    return axios.post("http://localhost:5000/auth/refresh", {}, {headers: {"Authorization": token}});
}