import React from 'react';

import {Container, RowContainer} from './styles';
import {StatCardProps} from './types';

import {Text} from '../Text';
import {ordinalSuffix} from '~/utils/ordinalSuffix';

export const StatCard = ({
  index,
  item,
  isLastGuess,
  isRightGuess,
}: StatCardProps) => {
  return (
    <Container isLastGuess={isLastGuess} isRightGuess={isRightGuess}>
      <RowContainer>
        <Text size={16} isBold>
          {index + 1}
          {ordinalSuffix(index + 1)} guess:{' '}
        </Text>
        <Text color={isRightGuess ? 'green' : 'red'} size={16}>
          {item}
        </Text>
      </RowContainer>
    </Container>
  );
};