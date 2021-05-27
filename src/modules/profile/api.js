import axios from 'axios';

export const getProfile = (token) => {
    return axios.get("http://localhost:5000/protected/profile/", {headers: {"Authorization": "Bearer "+token}})
}
export const patchProfile = (profile, token) => {
    return axios.post("http://localhost:5000/protected/profile/", {...profile}, {headers: {"Authorization": "Bearer "+token}})
}