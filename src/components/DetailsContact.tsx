import React from 'react';
import { DataItem } from '../reducers/types';
import styled from 'styled-components/macro';

const DetailsContact: React.FC<{ data: DataItem }> = ({ data }) => {
  const { phone, email } = data;
  return (
    <div>
      <h2>Contact</h2>
      <div>{phone}</div>
      <div>{email}</div>
    </div>
  );
};

export default DetailsContact;
