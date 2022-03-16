import {
    SAVE_PROFILE_DETAILS
} from "../types"



export const profileActions = (keyNale, profileData) => {

    return async (dispatch) => {
        switch (keyNale) {
            case SAVE_PROFILE_DETAILS:
                dispatch({ type: SAVE_PROFILE_DETAILS, payload: profileData })
                break;
        }

    }
}