import axios from 'axios';

export const getProfile = (token) => {
    return axios.get("https://nyx-learning-backend.herokuapp.com/protected/profile/", {headers: {"Authorization": "Bearer "+token}})
}
export const patchProfile = (profile, token) => {
    return axios.post("https://nyx-learning-backend.herokuapp.com/protected/profile/", {...profile}, {headers: {"Authorization": "Bearer "+token}})
}