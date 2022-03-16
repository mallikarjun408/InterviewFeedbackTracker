import { combineReducers } from 'redux';
import {
  SAVE_FEEDBACK_DETAILS_ONE,
  SAVE_FEEDBACK_DETAILS_TWO,
  SAVE_FEEDBACK_DETAILS_THREE,
  SAVE_FEEDBACK_DETAILS_FOUR,
  SAVE_FEEDBACK_DETAILS_SUBMITTED
} from '../types';


const INITIAL_STATE = {
  feedbackform1: null,
  feedbackform2: null,
  feedbackform3: null,
  feedbackform4: null
};

export const FeedbackReducer = (state = INITIAL_STATE, action) => {

  let newState = {}

  switch (action.type) {
    case SAVE_FEEDBACK_DETAILS_ONE:
      newState = Object.assign({}, state, { feedbackform1: action.payload });
      return newState;
    case SAVE_FEEDBACK_DETAILS_TWO:
      newState = Object.assign({}, state, { feedbackform2: action.payload });
      return newState;
    case SAVE_FEEDBACK_DETAILS_THREE:
      newState = Object.assign({}, state, { feedbackform3: action.payload });
      return newState;
    case SAVE_FEEDBACK_DETAILS_FOUR:
      newState = Object.assign({}, state, { feedbackform4: action.payload });
      return newState;
    case SAVE_FEEDBACK_DETAILS_SUBMITTED:
      newState = Object.assign({}, state, INITIAL_STATE);
      return newState;
    default:
      return state || newState;
  }
};


