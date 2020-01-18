import { FETCH_ALL_BUSINESSES, LOADING, ERROR } from '../constants/actionTypes';
import { ErrorType, DataArray } from '../reducers/types';
import { API_URL } from '../constants/global';

const fetchAll = (data: DataArray) => ({
  type: FETCH_ALL_BUSINESSES,
  payload: data
});
const loading = (isLoading: boolean) => ({
  type: LOADING,
  payload: isLoading
});
const error = (error: ErrorType) => ({
  type: ERROR,
  payload: error
});

const clearErrorPayload = () => {
  return { displayMsg: '', error: {} };
};

const generateErrorPayload = (displayMsg: string, error: Object) => {
  return {
    displayMsg,
    error
  };
};

export function fetchData() {
  return async (dispatch: any) => {
    try {
      dispatch(loading(true));
      dispatch(error(clearErrorPayload()));
      const rawData = await fetch(API_URL);
      const jsonData = await rawData.json();
      dispatch(fetchAll(jsonData.clients));
      dispatch(loading(false));
    } catch (err) {
      dispatch(
        error(
          generateErrorPayload(
            'A network error occurred. Please try reloading the page.',
            error
          )
        )
      );
      dispatch(loading(false));
    }
  };
}
