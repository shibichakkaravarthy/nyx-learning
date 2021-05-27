import {asyncActionGenerator, plainActionGenerator} from 'utils';

export const getAvailableCoursesAsyncActions = asyncActionGenerator('GET_AVAILABLE_COURSES')

export const getCreatedCoursesAsyncActions = asyncActionGenerator('GET_CREATED_COURSES')

export const getEnrolledCoursesAsyncActions = asyncActionGenerator('GET_ENROLLED_COURSES')

export const enrollAsyncActions = asyncActionGenerator('ENROLL')

export const createCourseAsyncActions = asyncActionGenerator('CREATE_COURSE')