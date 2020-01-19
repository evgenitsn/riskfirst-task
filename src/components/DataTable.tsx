import React from 'react';
import DataRow from './DataRow';
import { DataArray } from '../reducers/types';
import styled from 'styled-components/macro';
import TRow from './styled/TRow';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  padding: 1rem 2rem;
  text-align: left;
  color: #b51d76;
`;

const DataTable: React.FC<{ data: DataArray }> = ({ data }) => {
  return (
    <Table>
      <thead>
        <TRow>
          <Th>NAME</Th>
          <Th>DESCRIPTION</Th>
        </TRow>
      </thead>
      <tbody>
        {data.map(item => {
          return <DataRow key={item.id} item={item} />;
        })}
      </tbody>
    </Table>
  );
};

export default DataTable;
