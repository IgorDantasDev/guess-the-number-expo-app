import React, {useEffect, useState} from 'react';

import {useRoute} from '@react-navigation/native';
import {Alert, FlatList} from 'react-native';

import {
  ButtonContainer,
  ButtonsRowContainer,
  Container,
  ContentGuess,
  Header,
  NumberContainer,
} from './styles';
import {Direction} from './types';
import {GameScreenRouteProp} from '~/@types/routes/StackNavigator';

import {Text} from '~/components/Text';
import {Button} from '~/components/Button';
import {Separator} from '~/components/Separator';
import {StatCard} from '~/components/StatCard';

let minBoundary = 1;
let maxBoundary = 100;

export const GameScreen = () => {
  /**
   * Hooks
   */

  const {enteredNumber} = useRoute<GameScreenRouteProp>().params;

  /**
   * States
   */
  const [currentGuess, setCurrentGuess] = useState(0);
  const [finishedGame, setFinishedGame] = useState(false);
  const [magiciansGuesses, setMagiciansGuesses] = useState<number[]>([]);

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

  const handleNextGuess = (direction: Direction) => {
    if (finishedGame) return;

    if (direction === 'lower') {
      if (currentGuess < enteredNumber) {
        return Alert.alert('WE KNOW YOU LYING');
      }
      maxBoundary = currentGuess;
    } else {
      if (currentGuess > enteredNumber) {
        return Alert.alert('WE KNOW YOU LYING');
      }
      minBoundary = currentGuess + 1;
    }
    const newRandomNumber = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess,
    );
    setMagiciansGuesses(oldState => [...oldState, currentGuess]);
    setCurrentGuess(newRandomNumber);
  };

  /**
   * useEffect
   */

  useEffect(() => {
    const initialGuess = generateRandomNumber(
      minBoundary,
      maxBoundary,
      enteredNumber,
    );
    setCurrentGuess(initialGuess);
  }, []);

  useEffect(() => {
    if (currentGuess === enteredNumber) {
      setMagiciansGuesses(oldState => [...oldState, currentGuess]);
      setFinishedGame(true);
      return Alert.alert(
        'The magician found your number!',
        'See the stats below!',
      );
    }
  }, [currentGuess]);

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
          <Text color={finishedGame ? 'green' : 'black'} size={22}>
            {currentGuess}
          </Text>
        </NumberContainer>
      </ContentGuess>
      <Separator height={10} />
      <ButtonsRowContainer>
        <ButtonContainer>
          <Button
            disabled={finishedGame}
            onPress={() => handleNextGuess('lower')}
            label="-"
          />
        </ButtonContainer>
        <Separator width={10} />
        <ButtonContainer>
          <Button
            disabled={finishedGame}
            onPress={() => handleNextGuess('greater')}
            label="+"
          />
        </ButtonContainer>
      </ButtonsRowContainer>
      <Separator height={30} />
      {finishedGame ? (
        <>
          <Text isBold size={20} alignSelf="center">
            Stats:
          </Text>
          <Separator height={10} />
          <FlatList
            showsVerticalScrollIndicator={false}
            data={magiciansGuesses}
            renderItem={({item, index}) => (
              <StatCard
                index={index}
                item={item}
                isLastGuess={index === magiciansGuesses.length - 1}
                isRightGuess={item === enteredNumber}
              />
            )}
          />
        </>
      ) : null}
    </Container>
  );
};
