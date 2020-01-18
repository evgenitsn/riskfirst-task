import React from 'react';
import styled from 'styled-components/macro';

const HeaderContainer = styled.header`
  border: 1px solid lightblue;
`;
const Title = styled.h1`
  text-align: center;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Title>Header Title</Title>
    </HeaderContainer>
  );
};

export default Header;
