import {call, put, takeLeading, select} from 'redux-saga/effects';
import {getAvailableCoursesAsyncActions, getCreatedCoursesAsyncActions, getEnrolledCoursesAsyncActions, enrollAsyncActions, createCourseAsyncActions} from './actions';
import {toast} from 'react-toastify';
import {refreshTokenSaga} from '../index';
import {getEnrolledCourses, getCreatedCourses, getAllCourses, enroll, createCourse} from './api';

function* getEnrolledCoursesSaga() {
    try {
        const currentToken = yield select((state) => state.authReducer.accessToken.token)
        const response = yield call(getEnrolledCourses, currentToken)
        console.log("ENROLLED RESPONSE", response.data)
        yield put(getEnrolledCoursesAsyncActions.success(response.data.result))
    } catch (error) {
        console.log("ERROR ENROLLED", error)
        yield put(getEnrolledCoursesAsyncActions.error(error))
        toast.error(error.response.data.message, {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
    }
}

function* getAllCoursesSaga(action) {
    try {
        yield* refreshTokenSaga();
        const currentToken = yield select((state) => state.authReducer.accessToken.token)
        const response = yield call(getAllCourses, currentToken)
        yield put(getAvailableCoursesAsyncActions.success(response.data.result))
    } catch (error) {
        console.log("ERROR ALLCOURSES", error)
        yield put(getAvailableCoursesAsyncActions.error(error))
        toast.error(error.response.data.message, {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
    }
}

function* getCreatedCoursesSaga(action) {
    try {
        yield* refreshTokenSaga();
        const currentToken = yield select((state) => state.authReducer.accessToken.token)
        const response = yield call(getCreatedCourses, currentToken)
        yield put(getCreatedCoursesAsyncActions.success(response.data.result))
    } catch (error) {
        console.log("GET CREATED ERROR", error)
        yield put(getCreatedCoursesAsyncActions.error(error))
        toast.error(error.response.data.message, {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
    }
}

function* createCourseSaga(action) {
    try {
        yield* refreshTokenSaga();
        const authState = yield select((state) => state.authReducer)
        const response = yield call(createCourse, {...action.payload, faculty: authState.accountId}, authState.accessToken.token)
        yield put(createCourseAsyncActions.success(response.data.result))
        toast.success('New course Created', {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
    } catch (error) {
        toast.error(error.response.data.message, {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
    }
}

function* enrollSaga(action) {
    try {
        yield* refreshTokenSaga();
        const authState = yield select((state) => state.authReducer)
        const response = yield call(enroll, action.payload, authState.accessToken.token)
        yield put(enrollAsyncActions.success(response.data.result))
        toast.success('Congratulations! You have enrolled in a new course', {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
    } catch (error) {
        toast.error(error.response.data.message, {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
    }
}

function* mainSaga() {
    yield takeLeading(getEnrolledCoursesAsyncActions.actionNames.request, getEnrolledCoursesSaga);
    yield takeLeading(getCreatedCoursesAsyncActions.actionNames.request, getCreatedCoursesSaga);
	yield takeLeading(getAvailableCoursesAsyncActions.actionNames.request, getAllCoursesSaga);
	yield takeLeading(createCourseAsyncActions.actionNames.request, createCourseSaga);
	yield takeLeading(enrollAsyncActions.actionNames.request, enrollSaga);
}

export default mainSaga;