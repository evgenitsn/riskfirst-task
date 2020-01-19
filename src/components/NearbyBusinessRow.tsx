import React from 'react';
import { useHistory } from 'react-router-dom';
import { DataItem } from '../reducers/types';
import styled from 'styled-components/macro';

const TR = styled.tr`
  cursor: pointer;
`;
const TD = styled.td`
  background-color: #f8f8fa;
  padding: 0.8rem;
  border-bottom: 5px solid #ffffff;
  opacity: 0.7;
  font-size: 0.9rem;
`;

const NearbyBusinessRow: React.FC<{ item: DataItem }> = ({ item }) => {
  const { id, name, address } = item;
  const history = useHistory();
  return (
    <TR onClick={() => history.push(`/details/${id}`)}>
      <TD>{name}</TD>
      <TD>
        <span>{address.number}, </span>
        <span>{address.street}, </span>
        <span>{address.zip}, </span>
        <span>{address.city} </span>
      </TD>
    </TR>
  );
};

export default NearbyBusinessRow;
