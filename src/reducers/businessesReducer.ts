import {
  FETCH_SINGLE_BUSINESS,
  FETCH_ALL_BUSINESSES,
  LOADING,
  ERROR
} from '../constants/types';

// TODO: FIX TYPES
type State = {
  data: Array<Object>;
  loading: Boolean;
  error: Object;
};

type Action = { type: string; payload: any };

const initialState = {
  data: [],
  loading: true,
  error: {}
};

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case FETCH_SINGLE_BUSINESS:
      return state;
    case FETCH_ALL_BUSINESSES:
      return { ...state, data: action.payload.clients };
    case LOADING:
      return { ...state, loading: action.payload };
    case ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
