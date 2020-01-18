import React from 'react';
import styled from 'styled-components/macro';
import { ErrorType } from '../reducers/types';

const ErrorContainer = styled.div`
  border: 1px solid #a91193;
  opacity: 0.8;
`;

const Error: React.FC<{ error: ErrorType }> = ({ error }) => {
  return (
    <ErrorContainer>
      <p>{error.displayMsg}</p>
      <button>Please try reload the page.</button>
    </ErrorContainer>
  );
};

export default Error;
