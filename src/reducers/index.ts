import { combineReducers } from 'redux';
import businesses from './businessesReducer';

const rootReducer = combineReducers({
  businesses
});

export default rootReducer;
