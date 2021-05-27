import moment from 'moment';
import * as profileActions from './actions';

const initialState = {
    isLoading: false,
    isSuccess: false,
    profile: {},
    editMode: false
}

const profileReducer = (state=initialState, action) => {
    switch(action.type) {
        case profileActions.getProfileAsyncActions.actionNames.request:
            return {...state, isLoading: true, isSuccess: false, editMode: false}

        case profileActions.getProfileAsyncActions.actionNames.success:
            return {...state, isLoading: false, profile: action.payload, editMode: false}
        
        case profileActions.getProfileAsyncActions.actionNames.error:
            return {...state, isLoading: false, isSuccess: false, }
        
        case profileActions.patchProfileAsyncActions.actionNames.request:
            return {...state, isLoading: true, isSuccess: false, }

        case profileActions.patchProfileAsyncActions.actionNames.success:
            return {...state, isLoading: false, isSuccess: true, profile: action.payload, editMode: false}
        
        case profileActions.patchProfileAsyncActions.actionNames.error:
            return {...state, isLoading: false, isSuccess: false, }
        
        case profileActions.setEditModeAction.actionName:
            return {...state, editMode: true, isSuccess: false}
        case 'LOGOUT':
            return {...state, profile: {}}

        default:
            return state
    }
}

export default profileReducer;