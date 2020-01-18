import { Actions, State } from './types';
import { FETCH_ALL_BUSINESSES, LOADING, ERROR } from '../constants/actionTypes';

const initialState: State = {
  data: [],
  loading: true,
  error: {
    displayMsg: '',
    error: {}
  }
};

export default (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case FETCH_ALL_BUSINESSES:
      return { ...state, data: action.payload };
    case LOADING:
      return { ...state, loading: action.payload };
    case ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
