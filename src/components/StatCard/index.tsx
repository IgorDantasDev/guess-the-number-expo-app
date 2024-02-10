import React from 'react';

import {Container, RowContainer} from './styles';
import {StatCardProps} from './types';

import {Text} from '../Text';
import {ordinalSuffix} from '~/utils/ordinalSuffix';
import Animated, {SlideInLeft, SlideInRight} from 'react-native-reanimated';

export const StatCard = ({
  index,
  item,
  isLastGuess,
  isRightGuess,
}: StatCardProps) => {
  return (
    <Animated.View
      entering={
        index % 2 === 0
          ? SlideInRight.springify().delay(index * 500)
          : SlideInLeft.springify().delay(index * 500)
      }>
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
    </Animated.View>
  );
};
