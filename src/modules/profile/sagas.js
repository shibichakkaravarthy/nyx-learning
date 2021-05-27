import {call, put, takeLeading, select} from 'redux-saga/effects';
import * as profileActions from './actions';
import {toast} from 'react-toastify';
import {refreshTokenSaga} from '../index';
import {getProfile, patchProfile} from './api';

function* getProfileSaga() {
    try {
        yield* refreshTokenSaga();
        const currentToken = yield select((state) => state.authReducer.accessToken.token)
        const response = yield call(getProfile, currentToken)
        console.log("Profile GET RESPONSE", response.data)
        yield put(profileActions.getProfileAsyncActions.success(response.data.result))
    } catch (error) {
        console.log("ERROR ENROLLED", error)
        yield put(profileActions.getProfileAsyncActions.error(error))
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

function* patchProfileSaga(action) {
    try {
        yield* refreshTokenSaga();
        const currentToken = yield select((state) => state.authReducer.accessToken.token)
        console.log()
        const response = yield call(patchProfile, action.payload, currentToken)
        console.log("AllCourses RESPONSE", response)
        yield put(profileActions.patchProfileAsyncActions.success(response.data))
    } catch (error) {
        console.log("ERROR ALLCOURSES", error)
        yield put(profileActions.patchProfileAsyncActions.error(error))
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
    yield takeLeading(profileActions.getProfileAsyncActions.actionNames.request, getProfileSaga);
	yield takeLeading(profileActions.patchProfileAsyncActions.actionNames.request, patchProfileSaga);
}

export default mainSaga;