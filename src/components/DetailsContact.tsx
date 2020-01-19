import React from 'react';
import { DataItem } from '../reducers/types';
import { SectionTitle, SectionContainer } from './styled';

const DetailsContact: React.FC<{ data: DataItem }> = ({ data }) => {
  const { phone, email } = data;
  return (
    <div>
      <SectionTitle>Contact</SectionTitle>
      <SectionContainer>{phone}</SectionContainer>
      <SectionContainer>{email}</SectionContainer>
    </div>
  );
};

export default DetailsContact;
