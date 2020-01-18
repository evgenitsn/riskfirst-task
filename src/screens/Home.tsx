import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '../selectors/reduxSelectorUtil';
import { fetchData } from '../actions/actions';
import { DataTable, Loading, Error } from '../components';

const Home: React.FC = () => {
  const { data, loading, error } = useSelector(state => state.businesses);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.length === 0) {
      dispatch(fetchData());
    }
  }, [data.length, dispatch]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error
          retry={() => dispatch(fetchData())}
          msg={error || 'Default error'}
        />
      ) : (
        <DataTable data={data} />
      )}
    </div>
  );
};

export default Home;
