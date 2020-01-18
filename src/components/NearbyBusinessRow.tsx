import React from 'react';
import { useHistory } from 'react-router-dom';
import { DataItem } from '../reducers/types';
import styled from 'styled-components/macro';

const NearbyBusinessRow: React.FC<{ item: DataItem }> = ({ item }) => {
  const { id, name, address } = item;
  const history = useHistory();
  return (
    <tr onClick={() => history.push(`/details/${id}`)}>
      <td>{name}</td>
      <td>
        <span>{address.number}</span>
        <span>{address.street}</span>
        <span>{address.zip}</span>
        <span>{address.city}</span>
      </td>
    </tr>
  );
};

export default NearbyBusinessRow;
