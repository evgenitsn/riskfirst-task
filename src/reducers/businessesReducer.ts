import {
  FETCH_SINGLE_BUSINESS,
  FETCH_ALL_BUSINESSES,
  LOADING,
  ERROR
} from '../constants/types'

// TODO: FIX TYPES
type State = {
  businesses: Array<Object>
  loading: Boolean
  error: Object
}

type Action = { type: string; payload: number }

const initialState = {
  businesses: [],
  loading: true,
  error: {}
}

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case FETCH_SINGLE_BUSINESS:
      return state
    case FETCH_ALL_BUSINESSES:
      return state
    case LOADING:
      return state
    case ERROR:
      return state
    default:
      return state
  }
}
