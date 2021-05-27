import {asyncActionGenerator, plainActionGenerator} from 'utils';

export const signinAsyncActions = asyncActionGenerator('SIGNIN')

export const signupAsyncActions = asyncActionGenerator('SIGNUP')

export const logoutAction = plainActionGenerator('LOGOUT');

export const tokenRefreshAction = plainActionGenerator('TOKEN_REFRESH');