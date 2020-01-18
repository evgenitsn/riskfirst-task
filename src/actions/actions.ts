import * as types from '../constants/types';

// TODO: Fix types
type ErrorType = {};

export const fetchAll = () => ({
  type: types.FETCH_ALL_BUSINESSES
});
export const fetchSingle = (id: string) => ({
  type: types.FETCH_SINGLE_BUSINESS,
  payload: id
});
export const loading = (isLoading: boolean) => ({
  type: types.FETCH_ALL_BUSINESSES,
  payload: isLoading
});
export const error = (error: ErrorType) => ({
  type: types.FETCH_ALL_BUSINESSES,
  payload: error
});
