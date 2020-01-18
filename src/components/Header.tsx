import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';

const HeaderContainer = styled.header`
  border: 1px solid lightblue;
`;
const Title = styled.h1`
  text-align: center;
`;

const Header: React.FC = () => {
  const history = useHistory();
  return (
    <HeaderContainer>
      <Title onClick={() => history.push('/')}>Header Title</Title>
    </HeaderContainer>
  );
};

export default Header;
