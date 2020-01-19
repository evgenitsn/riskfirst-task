import React from 'react';
import { DataItem } from '../reducers/types';
import styled from 'styled-components/macro';

const DetailsAddress: React.FC<{ data: DataItem }> = ({ data }) => {
  const {
    address: { number, street, city, country, zip }
  } = data;
  return (
    <div>
      <h2>Address</h2>
      <div>
        {number} {street}
      </div>
      <div>
        {city} {country} {zip}
      </div>
    </div>
  );
};

export default DetailsAddress;
