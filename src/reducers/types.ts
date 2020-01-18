import { FETCH_ALL_BUSINESSES, LOADING, ERROR } from '../constants/actionTypes';

export type ErrorType = {
  displayMsg: string;
  error: Object;
};

export type DataItemAddress = {
  number: string;
  street: string;
  zip: string;
  city: string;
  country: string;
};

export type DataItem = {
  id: number;
  name: string;
  description: string;
  phone: string;
  image: string;
  email: string;
  address: DataItemAddress;
};

export type DataArray = Array<DataItem>;

export type State = {
  data: DataArray;
  loading: boolean;
  error: ErrorType;
};

export type Actions =
  | {
      type: typeof FETCH_ALL_BUSINESSES;
      payload: DataArray;
    }
  | {
      type: typeof LOADING;
      payload: boolean;
    }
  | {
      type: typeof ERROR;
      payload: ErrorType;
    };
