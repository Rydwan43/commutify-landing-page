import React from 'react';
import styled from 'styled-components';

import { ReactComponent as LinuxIcon } from '../../assets/hero/linux-icon.svg';
import { ReactComponent as WindowsIcon } from '../../assets/hero/windows-icon.svg';
import { ReactComponent as GoogleIcon } from '../../assets/hero/googlePlay-icon.svg';

const ButtonStyled = styled.div`
  color: white;
  padding: 22px;

  background: ${(props) => (props.background ? props.background : 'black')};

  box-sizing: border-box;
  border-radius: 10px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  margin-right: 20px;

  strong {
    font-weight: 800;
    font-size: 25px;
  }

  cursor: pointer;
`;

const Text = styled.div`
  padding-left: 20px;
`;

const Frirst = styled.p`
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;

  margin: 0;
`;

const Second = styled.p`
  font-weight: 800;
  font-size: 25px;
  line-height: 32px;

  margin: 0;
`;

const Button = (props) => {
  const { platform } = props;

  let Icon;
  let background;
  let text;

  switch (platform) {
    case 'Linux':
      Icon = LinuxIcon;
      background = '#303778';
      text = 'Download for';
      break;
    case 'Windows':
      Icon = WindowsIcon;
      background = '#6876E8';
      text = 'Download for';
      break;
    case 'Google':
      Icon = GoogleIcon;
      background = '#F6BD60';
      text = 'Get it on';
      break;
    default:
      console.log('none');
  }

  return (
    <ButtonStyled background={background}>
      <Icon />
      <Text>
        <Frirst>{text}</Frirst>
        <Second>{platform}</Second>
      </Text>
    </ButtonStyled>
  );
};

export default Button;
