import React, {useState} from 'react';

import {
  ButtonContainer,
  ButtonsRowContainer,
  Container,
  ContentGuess,
  Header,
  NumberContainer,
} from './styles';

import {Text} from '~/components/Text';
import {Button} from '~/components/Button';
import {Separator} from '~/components/Separator';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';

export const GameScreen = () => {
  /**
   * Hooks
   */

  const {enteredNumber} =
    useRoute<RouteProp<StackParamList, 'GameScreen'>>().params;

  /**
   * Callbacks
   */
  const generateRandomNumber = (min, max, exclude) => {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    if (randomNumber === exclude) {
      return generateRandomNumber(min, max, exclude);
    } else {
      return randomNumber;
    }
  };

  /**
   * Constants
   */
  const initialGuess = generateRandomNumber(1, 100, enteredNumber);

  /**
   * States
   */
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <Container>
      <Header>
        <Text isBold size={26}>
          Magician's Guess
        </Text>
      </Header>
      <Separator height={10} />
      <ContentGuess>
        <NumberContainer>
          <Text size={22}>{currentGuess}</Text>
        </NumberContainer>
      </ContentGuess>
      <Separator height={10} />
      <ButtonsRowContainer>
        <ButtonContainer>
          <Button label="+" />
        </ButtonContainer>
        <Separator width={10} />
        <ButtonContainer>
          <Button label="-" />
        </ButtonContainer>
      </ButtonsRowContainer>
    </Container>
  );
};
