import React from 'react';
import styled from 'styled-components/macro';
import { ErrorType } from '../reducers/types';

const ErrorContainer = styled.div`
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const P = styled.p`
  border-radius: 0;
  border: none;
  margin: 0.5rem 1rem;
  padding: 0.5rem 3rem;
  font-size: 1rem;
`;

const Error: React.FC<{ error: ErrorType }> = ({ error }) => {
  return (
    <ErrorContainer>
      <P>{error.displayMsg || 'Unknown Error'}</P>
      <P>Please try reload the page.</P>
    </ErrorContainer>
  );
};

export default Error;
