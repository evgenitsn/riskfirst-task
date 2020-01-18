import React from 'react';
import useLoadInitialData from '../hooks/useLoadInitialData';
import { DataTable, Loading, Error } from '../components';

const Home: React.FC = () => {
  const { data, loading, error } = useLoadInitialData();

  return (
    <div>
      {loading ? (
        <Loading />
      ) : error.displayMsg ? (
        <Error error={error} />
      ) : (
        <DataTable data={data} />
      )}
    </div>
  );
};

export default Home;
