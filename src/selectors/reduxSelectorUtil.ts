import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook
} from 'react-redux';

import { RootState } from '../reducers/index';

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
