import React from 'react';
import ReactLoading from 'react-loading';

const Loading: React.FC = () => {
  return (
    <>
      <ReactLoading type={'spin'} color={'#a91963'} height={32} width={32} />
    </>
  );
};

export default Loading;
