import React from 'react';
import styled from 'styled-components';

import Button from '../Reuses/Button';
import AdvantageIconComponent from './AdvantageItemComponents';

import { ReactComponent as ChatIcon } from '../../assets/advantages/chat.svg';
import { ReactComponent as HeartIcon } from '../../assets/advantages/heart.svg';
import { ReactComponent as Promotioncon } from '../../assets/advantages/promotion.svg';
import { ReactComponent as SettingsIcon } from '../../assets/advantages/settings.svg';

import ImageFirst from '../../assets/advantages/ImageFirst.png';

import Mobile1 from '../../assets/advantages/Mobile1.png';
import Mobile2 from '../../assets/advantages/Mobile2.png';
import Mobile3 from '../../assets/advantages/Mobile3.png';

import { ReactComponent as FirstEllipse } from '../../assets/advantages/Ellipse1.svg';
import { ReactComponent as SecondEllipse } from '../../assets/advantages/Ellipse2.svg';
import { ReactComponent as ThirdEllipse } from '../../assets/advantages/Ellipse3.svg';

const AdventagesStyled = styled.section`
  max-width: 100vw;
`;

const MainNameContainer = styled.div`
  display: flex;
  justify-content: center;
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
    left: 50%;
    width: 120%;
    height: 35%;

    transform: translate(-50%, -40%);

    background: #80daf782;
    @media (max-width: 500px) {
      width: 100%;
    }
  }

  @media (max-width: 500px) {
    font-size: 40px;
  }
`;

const AdvantagesList = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 25px;

  @media (max-width: 1200px) {
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

const ImageAndEllipse = styled.div`
  padding: 50px;

  @media (max-width: 500px) {
    padding: 0px;
  }

  margin-top: 100px;
  position: relative;

  .frstEl {
    position: absolute;
    top: 30px;
    right: 0;

    z-index: -1;
  }

  .secondEl {
    position: absolute;
    bottom: 0px;
    left: 0;

    z-index: -1;
  }

  .thirdEl {
    position: absolute;
    bottom: -50px;
    left: 0;

    z-index: -1;
  }
`;

const FirstImage = styled.div`
  max-width: 1500px;
  margin: 0 auto;

  & img {
    width: 100%;
    height: auto;
  }
`;

const MobileScreens = styled.div`
  padding: 50px;
  margin-top: 100px;
`;

const ScreensWrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;

  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  & .scr {
    margin-bottom: 20px;
  }

  & img {
    width: 100%;
    height: auto;
  }
`;

const DownloadButtons = styled.div`
  padding-bottom: 100px;
`;

const ButtonsWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;

  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    gap: 50px;
  }
`;

const Advantages = () => {
  return (
    <AdventagesStyled id='Advantage'>
      <MainNameContainer>
        <MainName>
          <div className='halfBg' />
          Advantages
        </MainName>
      </MainNameContainer>

      <AdvantagesList>
        <AdvantageIconComponent
          color='#6876E8'
          icon={ChatIcon}
          text='The application will help students not to miss important
              information.'
        />
        <AdvantageIconComponent
          color='#F6BD60'
          icon={HeartIcon}
          text='User-friendly interface and useful features.'
        />
        <AdvantageIconComponent
          color='#80DBF7'
          icon={Promotioncon}
          text='The ability to always keep abreast of university events.'
        />
        <AdvantageIconComponent
          color='#F5CAC3'
          icon={SettingsIcon}
          text='Cross-platform application, meets user requirements.'
        />
      </AdvantagesList>

      <ImageAndEllipse>
        <div className='frstEl'>
          <FirstEllipse />
        </div>
        <div className='secondEl'>
          <SecondEllipse />
        </div>
        <div className='thirdEl'>
          <ThirdEllipse />
        </div>
        <FirstImage>
          <img src={ImageFirst} alt='' />
        </FirstImage>
      </ImageAndEllipse>

      <MobileScreens>
        <ScreensWrapper>
          <div className='scr'>
            <img src={Mobile1} alt='' />
          </div>
          <div className='scr'>
            <img src={Mobile2} alt='' />
          </div>
          <div className='scr'>
            <img src={Mobile3} alt='' />
          </div>
        </ScreensWrapper>
      </MobileScreens>

      <DownloadButtons>
        <ButtonsWrapper>
          <Button platform='Linux'></Button>

          <Button platform='Windows'></Button>

          <Button platform='Google'></Button>
        </ButtonsWrapper>
      </DownloadButtons>
    </AdventagesStyled>
  );
};

export default Advantages;
