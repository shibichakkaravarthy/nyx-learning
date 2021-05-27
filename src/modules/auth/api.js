import axios from 'axios';

export const signin = (emailId, password) => {
    return axios.post("https://nyx-learning-backend.herokuapp.com/auth/signin", {emailId, password})
}

export const signup = (emailId, password, role) => {
    return axios.post("https://nyx-learning-backend.herokuapp.com/auth/signup", {emailId, password, role})
}

export const refreshToken = (token) => {
    return axios.post("https://nyx-learning-backend.herokuapp.com//auth/refresh", {}, {headers: {"Authorization": token}});
}