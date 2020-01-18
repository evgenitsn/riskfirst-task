import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '../selectors/reduxSelectorUtil';
import { fetchData } from '../actions/actions';

export default function useLoadInitialData() {
  const { data, loading, error } = useSelector(state => state.businesses);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.length === 0) {
      dispatch(fetchData());
    }
  }, [data.length, dispatch]);
  return { data, loading, error };
}
