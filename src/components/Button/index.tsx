import React from 'react';
import {Container} from './styles';
import {ButtonProps} from './types';
import {Text} from '../Text';

export const Button = ({label, onPress, disabled, ...rest}: ButtonProps) => {
  return (
    <Container {...rest} disabled={disabled} onPress={onPress}>
      <Text size={16} color="white">
        {label}
      </Text>
    </Container>
  );
};
