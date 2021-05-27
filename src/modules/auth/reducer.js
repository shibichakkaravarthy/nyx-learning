import moment from 'moment';
import * as authActions from './actions';

const initialState = {
    isLoading: false,
    isSuccess: false,
    refreshToken: '',
    accessToken: {
        token: '',
        timestamp: moment(),
    },
    accountId: '',
    role: 'STUDENT',
    newUser: false
}

const authReducer = (state=initialState, action) => {
    switch(action.type) {
        case authActions.signinAsyncActions.actionNames.request:
            return {...state, isLoading: true, isSuccess: false, newUser: false}
        
        case authActions.signinAsyncActions.actionNames.success:
            return {...state, isLoading: false, isSuccess: true, accountId: action.payload._id, role: action.payload.role, refreshToken: action.payload.refreshToken, accessToken: {token: action.payload.accessToken, timestamp: moment()}}

        case authActions.signinAsyncActions.actionNames.error:
            return {...state, isLoading: false, isSuccess: false}

        case authActions.signupAsyncActions.actionNames.request:
            return {...state, isLoading: true, isSuccess: false, newUser: true}
        
        case authActions.signupAsyncActions.actionNames.success:
            return {...state, isLoading: false, isSuccess: true, accountId: action.payload._id, role: action.payload.role, refreshToken: action.payload.refreshToken, accessToken: {token: action.payload.accessToken, timestamp: moment()}}

        case authActions.signupAsyncActions.actionNames.error:
            return {...state, isLoading: false, isSuccess: false}

        case authActions.tokenRefreshAction.actionName:
            return {...state, accessToken: {token: action.payload, timestamp: moment()}}
        
        case authActions.logoutAction.actionName:
            return initialState;

        default:
            return state
    }
}

export default authReducer;