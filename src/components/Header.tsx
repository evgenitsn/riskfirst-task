import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import logo from '../assets/logo.png';

const HeaderContainer = styled.header`
  background-color: #ffffff;
  box-shadow: 2px 0px 12px 0px #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  margin: 20px;
  height: 50px;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Link to='/'>
        <Logo src={logo} />
      </Link>
    </HeaderContainer>
  );
};

export default Header;
