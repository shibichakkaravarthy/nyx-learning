import {asyncActionGenerator, plainActionGenerator} from 'utils';

export const getProfileAsyncActions = asyncActionGenerator('GET_PROFILE');

export const patchProfileAsyncActions = asyncActionGenerator('PATCH_PROFILE');

export const setEditModeAction = plainActionGenerator('SET_EDIT_MODE');