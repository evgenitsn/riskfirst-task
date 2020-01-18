import React from 'react';
import styled from 'styled-components/macro';

const ErrorContainer = styled.div`
  border: 1px solid #a91193;
  opacity: 0.8;
`;

const Error: React.FC<{ msg: string }> = ({ msg }) => {
  return (
    <ErrorContainer>
      <p>{msg}</p>
      <button>Please try reload the page.</button>
    </ErrorContainer>
  );
};

export default Error;
