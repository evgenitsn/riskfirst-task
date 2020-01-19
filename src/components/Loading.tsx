import React from 'react';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

const Loader = styled(ReactLoading)`
  margin: 0 auto;
  padding: 5rem;
`;

const Loading: React.FC = () => {
  return (
    <>
      <Loader type={'spin'} color={'#a91963'} height={32} width={32} />
    </>
  );
};

export default Loading;
