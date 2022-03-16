import {
    SAVE_PROFILE_DETAILS
} from '../types';


const INITIAL_STATE = {
    profileDetails: null
};

export const ProfileReducer = (state = INITIAL_STATE, action) => {

    let newState = {}

    switch (action.type) {
        case SAVE_PROFILE_DETAILS:
            newState = Object.assign({}, state, { profileDetails: action.payload });
            return newState;

        default:
            return state || newState;
    }
};


