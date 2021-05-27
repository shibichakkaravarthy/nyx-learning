import {combineReducers} from 'redux';
import { put, takeEvery, all } from 'redux-saga/effects'
import authReducer, {authSaga} from './auth';
import courseReducer, {courseSaga} from './courses';
import {profileReducer, profileSaga} from './profile';
import {refreshTokenSaga} from './auth/sagas';

export function* rootSaga() {
  yield all([
  	authSaga(),
    courseSaga(),
    profileSaga(),
  ])
}

export {refreshTokenSaga}

export default combineReducers({
	authReducer,
  courseReducer,
  profileReducer,
})