import axios from 'axios';

export const getEnrolledCourses = (token) => {
    return axios.get("http://localhost:5000/protected/student/enrolledCourses", {headers: {"Authorization": "Bearer "+token}})
}

export const getAllCourses = (token) => {
    return axios.get("http://localhost:5000/protected/student/allCourses", {headers: {"Authorization": "Bearer "+token}})
}

export const getCreatedCourses = (token) => {
    return axios.get("http://localhost:5000/protected/faculty/courses", {headers: {"Authorization": "Bearer "+token}})
}

export const enroll = (courseId, token) => {
    return axios.patch("http://localhost:5000/protected/student/enroll/"+courseId, {}, {headers: {"Authorization": "Bearer "+token}})
}

export const createCourse = (courseDetails, token) => {
    return axios.post("http://localhost:5000/protected/faculty/courses/create",{...courseDetails}, {headers: {"Authorization": "Bearer "+token}})
}