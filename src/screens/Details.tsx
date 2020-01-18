import React from 'react';
import { useParams } from 'react-router-dom';

const Details: React.FC = props => {
  let { id } = useParams();

  return (
    <div>
      <div>{id}</div>
    </div>
  );
};

export default Details;
