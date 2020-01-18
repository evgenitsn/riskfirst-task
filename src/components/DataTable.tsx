import React from 'react';
import DataRow from './DataRow';
import styled from 'styled-components/macro';

const DataTable: React.FC<{ data: Array<any> }> = ({ data }) => {
  return (
    <table style={{ border: '1px solid pink' }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => {
          return <DataRow key={item.id} item={item} />;
        })}
      </tbody>
    </table>
  );
};

export default DataTable;
