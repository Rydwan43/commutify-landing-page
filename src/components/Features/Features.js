import React from 'react';
import styled from 'styled-components';

import FeatureItemComponent from './FeatureItemComponent';

import AutomaticallyImage from '../../assets/features/automatically.png';
import ChatImage from '../../assets/features/chat.png';
import SharedImage from '../../assets/features/shared.png';

const FaturesStyled = styled.section`
  margin-top: 130px;
  max-width: 100vw;
  padding-bottom: 50px;

  overflow: hidden;
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
  }
`;

const FeaturesWrapper = styled.div`
  height: fit-content;
  padding: 0 100px;

  @media (max-width: 900px) {
    padding: 0 20px;
  }
`;

const Features = () => {
  return (
    <FaturesStyled id='Features'>
      <MainNameContainer>
        <MainName>
          <div className='halfBg' />
          Features
        </MainName>
      </MainNameContainer>

      <FeaturesWrapper>
        <FeatureItemComponent
          name={'Automatically generated chats'}
          description={
            'The system itself will take care of creating chats and add the necessary participants there.'
          }
          image={AutomaticallyImage}
          direction={'normal'}
        />

        <FeatureItemComponent
          name={'Chat grouping'}
          description={
            'These chats are automatically created: Your faculty, Your faculty (students of your year), Your specialty, Your group, All faculties of your year'
          }
          image={ChatImage}
          direction={'reverse'}
        />

        <FeatureItemComponent
          name={'Shared media'}
          description={
            'You can send pictures, files and links. Sent media history is available'
          }
          image={SharedImage}
          direction={'normal'}
        />
      </FeaturesWrapper>
    </FaturesStyled>
  );
};

export default Features;
