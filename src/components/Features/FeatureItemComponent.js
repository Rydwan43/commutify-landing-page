import React from 'react';
import styled, { css } from 'styled-components';

const FeatureItem = styled.div`
  position: relative;
  max-width: 1200px;
  width: 100%;
  margin: 150px auto;

  display: flex;
  ${(props) =>
    props.direction === 'reverse' &&
    css`
      flex-direction: row-reverse;
      @media (max-width: 900px) {
        flex-direction: column-reverse;
      }
    `}

  justify-content: space-between;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const FeatureItemBorder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 90vw;
  height: 150%;
  border: 5px dashed #c0edfb;
  border-radius: 50px;

  z-index: -1;

  transform: translate(-20vw, -15%);

  ${(props) =>
    props.direction === 'reverse' &&
    css`
      transform: translate(-5vw, -15%);
    `}

  overflow-y: hidden;
`;

const FeatureLeft = styled.div`
  width: 50%;

  @media (max-width: 900px) {
    width: 80%;
  }
`;

const FeatureRight = styled.div``;

const FeatureItemName = styled.h1`
  font-weight: 800;
  font-size: 32px;
  line-height: 42px;

  text-transform: uppercase;
  color: #303778;
`;

const FeatureItemDescription = styled.p`
  font-weight: normal;
  font-size: 26px;
  line-height: 34px;

  color: #606277;
`;

const FeatureItemImage = styled.div`
  width: 100%;
  display: inline-block;

  & * {
    width: 100%;
    height: auto;
  }
`;

const FeatureItemComponent = ({ name, description, image, direction }) => {
  return (
    <FeatureItem direction={direction}>
      <FeatureItemBorder direction={direction} />
      <FeatureLeft>
        <FeatureItemName>{name}</FeatureItemName>
        <FeatureItemDescription>{description}</FeatureItemDescription>
      </FeatureLeft>
      <FeatureRight>
        <FeatureItemImage>
          <img src={image} alt='' />
        </FeatureItemImage>
      </FeatureRight>
    </FeatureItem>
  );
};

export default FeatureItemComponent;
