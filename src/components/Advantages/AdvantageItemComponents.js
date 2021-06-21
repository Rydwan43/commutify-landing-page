import React from 'react';
import styled from 'styled-components';

import { ReactComponent as WavesIcon } from '../../assets/advantages/waves.svg';

const AdvantageItem = styled.div`
  width: 280px;
  height: 420px;
  background: ${(props) => (props.color ? props.color : 'red')};
  padding: 30px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FirstLine = styled.div``;

const SecondLine = styled.div``;

const AdvantageIcon = styled.div`
  display: inline-block;

  width: auto;
  background: white;
  padding: 15px;
  border-radius: 15px;
`;

const AdvantageText = styled.h3`
  color: white;
  font-weight: bold;
  font-size: 28px;
  line-height: 41px;
`;

const AdvantageStamp = styled.div`
  align-self: flex-end;

  display: flex;
  justify-content: center;
`;

const AdvantageItemComponents = ({ color, icon, text }) => {
  const Icon = icon;

  return (
    <AdvantageItem color={color}>
      <FirstLine>
        <AdvantageIcon>
          <Icon />
        </AdvantageIcon>
        <AdvantageText>{text}</AdvantageText>
      </FirstLine>
      <SecondLine>
        <AdvantageStamp>
          <WavesIcon />
        </AdvantageStamp>
      </SecondLine>
    </AdvantageItem>
  );
};

export default AdvantageItemComponents;
