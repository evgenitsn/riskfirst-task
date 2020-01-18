import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../actions/actions';

const Home: React.FC = () => {
  const state: any = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div>
      <Link to='/details'>Details</Link>
      <button onClick={() => dispatch(fetchData())}>Add to count</button>
    </div>
  );
};

export default Home;
