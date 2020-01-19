import React from 'react';
import { useHistory } from 'react-router-dom';
import { DataItem } from '../reducers/types';
import styled from 'styled-components/macro';
import TRow from './styled/TRow';

const Td = styled.td`
  padding: 1rem 2rem;
  text-align: left;
`;

const TRowHover = styled(TRow)`
  &:hover {
    cursor: pointer;
    background-color: #f4f4f5;
  }
`;

const DataRow: React.FC<{ item: DataItem }> = ({ item }) => {
  const { id, name, description } = item;
  const history = useHistory();
  return (
    <TRowHover onClick={() => history.push(`/details/${id}`)}>
      <Td>{name}</Td>
      <Td>{description}</Td>
    </TRowHover>
  );
};

export default DataRow;
