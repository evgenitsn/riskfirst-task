import React from 'react';
import styled from 'styled-components/macro';

const ErrorContainer = styled.div`
  border: 1px solid #a91193;
  opacity: 0.8;
`;

const Error: React.FC<{ msg: string; retry: () => void }> = ({
  msg,
  retry
}) => {
  return (
    <ErrorContainer>
      <p>{msg}</p>
      <button onClick={retry}>Please try again</button>
    </ErrorContainer>
  );
};

export default Error;
