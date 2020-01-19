import React from 'react';
import { DataItem } from '../reducers/types';
import { SectionTitle, SectionContainer } from './styled';

const DetailsAddress: React.FC<{ data: DataItem }> = ({ data }) => {
  const {
    address: { number, street, city, country, zip }
  } = data;
  return (
    <div>
      <SectionTitle>Address</SectionTitle>
      <SectionContainer>
        <span>{number} </span>
        <span>{street}</span>
      </SectionContainer>
      <SectionContainer>
        <span>{city} </span>
        <span>{country} </span>
      </SectionContainer>
      <SectionContainer>
        <span>{zip}</span>
      </SectionContainer>
    </div>
  );
};

export default DetailsAddress;
