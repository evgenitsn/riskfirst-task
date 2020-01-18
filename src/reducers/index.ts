import { combineReducers } from 'redux';
import businesses from './businessesReducer';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  businesses
});

export default rootReducer;
