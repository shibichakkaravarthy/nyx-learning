import axios from 'axios';

export const getEnrolledCourses = (token) => {
    return axios.get("https://nyx-learning-backend.herokuapp.com/protected/student/enrolledCourses", {headers: {"Authorization": "Bearer "+token}})
}

export const getAllCourses = (token) => {
    return axios.get("https://nyx-learning-backend.herokuapp.com/protected/student/allCourses", {headers: {"Authorization": "Bearer "+token}})
}

export const getCreatedCourses = (token) => {
    return axios.get("https://nyx-learning-backend.herokuapp.com/protected/faculty/courses", {headers: {"Authorization": "Bearer "+token}})
}

export const enroll = (courseId, token) => {
    return axios.patch("https://nyx-learning-backend.herokuapp.com/protected/student/enroll/"+courseId, {}, {headers: {"Authorization": "Bearer "+token}})
}

export const createCourse = (courseDetails, token) => {
    return axios.post("https://nyx-learning-backend.herokuapp.com/protected/faculty/courses/create",{...courseDetails}, {headers: {"Authorization": "Bearer "+token}})
}