import moment from 'moment';
import * as courseActions from './actions';

const initialState = {
    isLoading: false,
    isSuccess: false,
    enrolledCourses: [],
    availableCourses: [],
    myCourses: []
}

const courseReducer = (state=initialState, action) => {
    switch(action.type) {
        case courseActions.getAvailableCoursesAsyncActions.actionNames.request:
            return {...state, isLoading: true, isSuccess: false, }

        case courseActions.getAvailableCoursesAsyncActions.actionNames.success:
            return {...state, isLoading: false, isSuccess: true, availableCourses: action.payload}
        
        case courseActions.getAvailableCoursesAsyncActions.actionNames.error:
            return {...state, isLoading: false, isSuccess: false, }
        
        case courseActions.getEnrolledCoursesAsyncActions.actionNames.request:
            return {...state, isLoading: true, isSuccess: false, }

        case courseActions.getEnrolledCoursesAsyncActions.actionNames.success:
            return {...state, isLoading: false, isSuccess: true, enrolledCourses: action.payload}
        
        case courseActions.getEnrolledCoursesAsyncActions.actionNames.error:
            return {...state, isLoading: false, isSuccess: false, }
        
        case courseActions.getCreatedCoursesAsyncActions.actionNames.request:
            return {...state, isLoading: true, isSuccess: false, }

        case courseActions.getCreatedCoursesAsyncActions.actionNames.success:
            return {...state, isLoading: false, isSuccess: true, myCourses: action.payload}
        
        case courseActions.getCreatedCoursesAsyncActions.actionNames.error:
            return {...state, isLoading: false, isSuccess: false, }

        default:
            return {...state}
    }
}

export default courseReducer;