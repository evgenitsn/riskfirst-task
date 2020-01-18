import React from 'react';
import { useHistory } from 'react-router-dom';
import { DataItem } from '../reducers/types';
import styled from 'styled-components/macro';

const DataRow: React.FC<{ item: DataItem }> = ({ item }) => {
  const { id, name, description } = item;
  const history = useHistory();
  return (
    <tr onClick={() => history.push(`/details/${id}`)}>
      <td>{name}</td>
      <td>{description}</td>
    </tr>
  );
};

export default DataRow;
