import * as types from '../constants/types';
import { API_URL } from '../constants/global';
// TODO: Fix types
type ErrorType = {};

const fetchAll = (data: Object) => ({
  type: types.FETCH_ALL_BUSINESSES,
  payload: data
});
const loading = (isLoading: boolean) => ({
  type: types.LOADING,
  payload: isLoading
});
const error = (error: ErrorType) => ({
  type: types.ERROR,
  payload: error
});

export function fetchData() {
  return async (dispatch: any) => {
    dispatch(loading(true));
    dispatch(error({}));
    const rawData = await fetch(API_URL);
    const jsonData = await rawData.json();
    dispatch(fetchAll(jsonData));
    dispatch(loading(false));
  };
}
