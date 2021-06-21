import React from 'react';
import styled from 'styled-components';

import { ReactComponent as CircleIcon } from '../../assets/our team/circle.svg';
import { ReactComponent as LikeIcon } from '../../assets/our team/like.svg';

import TeamImage from '../../assets/our team/team.png';

const OurTeamStyled = styled.section`
  max-width: 100vw;
`;

const MainNameContainer = styled.div`
  display: flex;
  justify-content: center;

  /* max-width: 100vw; */
`;

const MainName = styled.h2`
  position: relative;
  font-weight: 800;
  font-size: 50px;
  line-height: 64px;
  width: fit-content;

  text-align: center;
  text-transform: uppercase;
  color: #303778;

  .halfBg {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 55%;
    height: 35%;

    transform: translate(0%, -30%);

    background: #80daf782;
  }
`;

const OurTeamDiv = styled.div`
  padding: 100px;

  @media (max-width: 1000px) {
    padding: 20px;
  }
`;

const OurTeamWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;

  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 40%;

  & img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const CircleWrapper = styled.div`
  overflow: hidden;
  max-width: 100vw;

  position: absolute;
  top: -50px;
  left: -100px;

  z-index: -1;
`;

const Right = styled.div`
  width: 40%;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
const Title = styled.h3`
  font-weight: 800;
  font-size: 50px;
  line-height: 64px;

  text-transform: uppercase;

  color: #303778;

  & span {
    padding: 0 5px;
    background: #80daf782;
  }
`;
const Description = styled.p`
  font-size: 24px;
  line-height: 31px;

  color: #606277;
  margin-top: 0;
  margin-bottom: 50px;
`;

const Button = styled.div`
  display: inline-block;

  background: #6876e8;
  border-radius: 150px;
  padding: 20px 40px;

  font-weight: bold;
  font-size: 24px;
  line-height: 31px;

  color: white;

  cursor: pointer;

  & svg {
    margin-right: 20px;
  }
`;

const OurTeam = () => {
  return (
    <OurTeamStyled id='OurTeam'>
      <MainNameContainer>
        <MainName>
          Our team
          <div className='halfBg' />
        </MainName>
      </MainNameContainer>

      <OurTeamDiv>
        <OurTeamWrapper>
          <CircleWrapper>
            <CircleIcon />
          </CircleWrapper>
          <Left>
            <img src={TeamImage} alt='' />
          </Left>
          <Right>
            <Title>
              We are a young and <span>creative</span> team
            </Title>
            <Description>
              We created a project for the university. This is a platform where
              students can communicate with each other and share useful
              information.
            </Description>
            <Button>
              <LikeIcon />
              Good job!
            </Button>
          </Right>
        </OurTeamWrapper>
      </OurTeamDiv>
    </OurTeamStyled>
  );
};

export default OurTeam;
