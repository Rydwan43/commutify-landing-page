import React from 'react';
import styled, { keyframes } from 'styled-components';

import Button from '../Reuses/Button';

import bgLeftImg from '../../assets/hero/bgImg.png';
import { ReactComponent as MainIcon } from '../../assets/hero/commutify.svg';
import { ReactComponent as SlideIcon } from '../../assets/hero/SlideIcon.svg';
import HeroImage from '../../assets/hero/Group 99.png';

const HeroStyled = styled.div`
  max-width: 100vw;
  height: 95vh;
  position: relative;

  padding: 60px 180px;

  @media (max-width: 1300px) {
    padding: 20px 20px;
  }
`;

const LeftBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 65vw;

  z-index: -1;

  background-image: url(${bgLeftImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: right;
`;

const RightBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 100vw;

  z-index: -2;

  background: linear-gradient(247.96deg, #6874e8 -2.53%, #89fffd 63.65%);
`;

const RightImageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: fit-content;

  z-index: -1;

  overflow: hidden;

  @media (max-width: 1400px) {
    width: 50vw;
  }

  & img {
    height: 100%;
    width: auto;
  }
`;

const Navigation = styled.nav``;

const NavList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;

  list-style: none;
`;

const NavItem = styled.li`
  padding-right: 56px;

  font-weight: bold;
  font-size: 24px;

  @media (max-width: 900px) {
    font-size: 15px;
    padding-right: 20px;
  }

  line-height: 31px;

  color: #303778;
`;

const HeroGroup = styled.div`
  margin-top: 100px;

  @media (max-width: 900px) {
    margin-top: 20px;
  }

  max-width: 550px;
`;

const Logo = styled.div``;

const MainText = styled.h1`
  font-weight: 800;
  font-size: 49px;
  line-height: 64px;
  text-transform: uppercase;

  @media (max-width: 900px) {
    font-size: 40px;
    line-height: 44px;
  }

  color: #303778;

  & span {
    padding: 0 5px;
    background: #80daf782;
  }
`;
const SmallText = styled.div`
  font-size: 24px;
  line-height: 31px;
  margin-bottom: 40px;

  color: #606277;

  @media (max-width: 900px) {
    margin-bottom: 20px;
  }
`;
const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    gap: 10px;
    justify-content: center;
  }
`;

const slideDownKeyframes = keyframes`
  0% {
    transform: translate(-50%, 50%);

  }
  10% {

    transform: translate(-50%, 60%);

  }
  15% {

    transform: translate(-50%, 45%);

  }
  30% {
    transform: translate(-50%, 50%);
  }
  `;

const SlideDownClick = styled.div`
  display: inline-block;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  padding: 15px;

  border-radius: 100%;
  background: #ffffff;
  border: 3px solid #6876e8;

  animation: ${slideDownKeyframes} 3s ease infinite;
`;

const Hero = () => {
  return (
    <HeroStyled>
      <LeftBg />
      <RightBg />
      <RightImageContainer>
        <img src={HeroImage} alt='COMMUNIFY Preview' />
      </RightImageContainer>
      <Navigation>
        <NavList>
          <NavItem>
            <a href='#Features'>Possibilities</a>
          </NavItem>
          <NavItem>
            <a href='#Advantage'>Advantages</a>
          </NavItem>
          <NavItem>
            <a href='#OurTeam'>Our team</a>
          </NavItem>
        </NavList>
      </Navigation>
      <HeroGroup>
        <Logo>
          <MainIcon />
        </Logo>
        <MainText>
          We create a place to <span>exchange</span> info
        </MainText>
        <SmallText>
          Our main goal is to facilitate the exchange of information between
          students
        </SmallText>
        <Buttons>
          <Button color='#303778' platform='Linux' />
          <Button color='#6876E8' platform='Windows' />
        </Buttons>
      </HeroGroup>
      <a href='#Features'>
        <SlideDownClick>
          <SlideIcon style={{ transform: 'translateY(20%)' }} />
        </SlideDownClick>
      </a>
    </HeroStyled>
  );
};

export default Hero;
