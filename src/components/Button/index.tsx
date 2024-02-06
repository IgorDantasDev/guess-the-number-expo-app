import React from 'react';

import {Container} from './styles';
import {ButtonProps} from './types';

import {Text} from '../Text';
import {BACKGROUND_COLOR} from '~/constants/colors';

export const Button = ({
  label,
  onPress,
  bgColor = BACKGROUND_COLOR,
  textColor = '#2E3532',
  disabled,
  ...rest
}: ButtonProps) => {
  return (
    <Container
      bgColor={bgColor}
      {...rest}
      disabled={disabled}
      onPress={onPress}>
      <Text size={16} color={textColor}>
        {label}
      </Text>
    </Container>
  );
};
