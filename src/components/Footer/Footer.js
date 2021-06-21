import React from 'react';
import styled from 'styled-components';

import { ReactComponent as MainIcon } from '../../assets/hero/commutify.svg';

const FooterStyled = styled.footer`
  margin-top: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div``;

const Menu = styled.ul`
  margin-top: 20px;

  gap: 30px;
  display: flex;
  list-style: none;

  padding-left: 0;
`;

const MenuItem = styled.li`
  font-weight: bold;
  font-size: 24px;
  line-height: 31px;

  overflow: hidden;

  @media (max-width: 700px) {
    font-size: 15px;
  }

  color: #303778;
`;

const Rights = styled.p`
  font-weight: bold;
  font-size: 24px;
  line-height: 31px;

  color: #303778;

  opacity: 0.3;
`;

const Footer = () => {
  return (
    <FooterStyled>
      <Logo>
        <MainIcon />
      </Logo>
      <Menu>
        <MenuItem>
          <a href='#Features'>Possibilities</a>
        </MenuItem>
        <MenuItem>
          <a href='#Advantage'>Advantages</a>
        </MenuItem>
        <MenuItem>
          <a href='#OurTeam'>Our team</a>
        </MenuItem>
      </Menu>
      <Rights>© All rights reserved</Rights>
    </FooterStyled>
  );
};

export default Footer;
