import {
    SAVE_FEEDBACK_DETAILS_ONE,
    SAVE_FEEDBACK_DETAILS_TWO,
    SAVE_FEEDBACK_DETAILS_THREE,
    SAVE_FEEDBACK_DETAILS_FOUR,
    SAVE_FEEDBACK_DETAILS_SUBMITTED
} from "../types"



export const feedbackActions = (formName, feedbackData) => {

    return async (dispatch) => {
        switch (formName) {
            case SAVE_FEEDBACK_DETAILS_ONE:
                dispatch({ type: SAVE_FEEDBACK_DETAILS_ONE, payload: feedbackData })
                break;
            case SAVE_FEEDBACK_DETAILS_TWO:
                dispatch({ type: SAVE_FEEDBACK_DETAILS_TWO, payload: feedbackData })
                break;
            case SAVE_FEEDBACK_DETAILS_THREE:
                dispatch({ type: SAVE_FEEDBACK_DETAILS_THREE, payload: feedbackData })
                break;
            case SAVE_FEEDBACK_DETAILS_FOUR:
                dispatch({ type: SAVE_FEEDBACK_DETAILS_FOUR, payload: feedbackData })
            case SAVE_FEEDBACK_DETAILS_SUBMITTED:
                dispatch({ type: SAVE_FEEDBACK_DETAILS_SUBMITTED, payload: feedbackData })
                break;
        }

    }
}