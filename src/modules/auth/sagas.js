import {call, put, takeLeading, select} from 'redux-saga/effects';
import {signinAsyncActions, signupAsyncActions, tokenRefreshAction} from './actions';
import {toast} from 'react-toastify';
import {signin, signup, refreshToken} from './api';
import moment from 'moment';
import axios from 'axios';

function* signinSaga(action) {
    try {
        console.log("STARTED", action)
        const response = yield call(signin, action.payload.emailId, action.payload.password)
        axios.defaults.headers.common['Authorization'] = response.data.result.accessToken;
        yield put(signinAsyncActions.success(response.data.result))
    } catch (error) {
        console.log("ERROR", error.response)
        yield put(signinAsyncActions.error(error))
        toast.error(error.response.data.message, {
			position: "top-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
            hideProgressBar: true,
		});
    }
}

function* signupSaga(action) {
    try {
        const response = yield call(signup, action.payload.emailId, action.payload.password, action.payload.role)
        axios.defaults.headers.common['Authorization'] = response.data.result.accessToken;
        yield put(signupAsyncActions.success(response.data.result))
    } catch (error) {
        console.log("ERROR", error)
        yield put(signupAsyncActions.error(error))
        toast.error(error.response.data.message, {
			position: "top-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
            hideProgressBar: true,
		});
    }
}

export function* refreshTokenSaga() {
    try {
        const authReducer = yield select((state) => state.authReducer)
        console.log("REFRESH TOKEN CHECK", moment().isAfter(moment(authReducer.accessToken.timestamp).add(15, 'm')))
        if(moment().isAfter(moment(authReducer.accessToken.timestamp).add(15, 'm'))) {
            const response = yield call(refreshToken, authReducer.refreshToken);
            console.log("AYYOYO", response)
            yield put(tokenRefreshAction.action(response.data.result.accessToken))
        }
    }
    catch(error) {
        console.log("ERROR", error);
        toast.error(error.response.data.message, {
			position: "top-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
            hideProgressBar: true,
		});
    }
}

function* mainSaga() {
	yield takeLeading(signinAsyncActions.actionNames.request, signinSaga)
	yield takeLeading(signupAsyncActions.actionNames.request, signupSaga)
}

export default mainSaga;