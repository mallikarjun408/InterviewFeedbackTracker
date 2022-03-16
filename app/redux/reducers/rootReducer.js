import {combineReducers} from 'redux';
import { FeedbackReducer } from './FeedbackReducer';
import { ProfileReducer } from './ProfileReducer';

export const rootReducer = combineReducers({
    FeedbackReducer,
    ProfileReducer,
});

export default rootReducer;