import React, {useCallback, useEffect, useState} from 'react';

import {StackActions, useNavigation, useRoute} from '@react-navigation/native';
import {Alert, FlatList} from 'react-native';

import {
  ButtonContainer,
  ButtonsRowContainer,
  Container,
  ContentGuess,
  Header,
  NumberContainer,
} from './styles';
import {Direction, GenerateRandomNumberPayload} from './types';

import {Text} from '~/components/Text';
import {Button} from '~/components/Button';
import {Separator} from '~/components/Separator';
import {StatCard} from '~/components/StatCard';
import {INPUT_CONTAINER} from '~/constants/colors';

let minBoundary = 1;
let maxBoundary = 100;

export const GameScreen = () => {
  /**
   * Hooks
   */

  const {dispatch} = useNavigation<StackNavigatorProp>();
  const {enteredNumber} = useRoute<GameScreenRouteProp>().params;

  /**
   * States
   */

  const [currentGuess, setCurrentGuess] = useState(0);
  const [finishedGame, setFinishedGame] = useState(false);
  const [magiciansGuesses, setMagiciansGuesses] = useState<number[]>([]);
  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  /**
   * Callbacks
   */

  const generateRandomNumber = useCallback(
    ({min, max, exclude}: GenerateRandomNumberPayload) => {
      const randomNumber = Math.floor(Math.random() * (max - min)) + min;
      if (randomNumber === exclude) {
        return generateRandomNumber({min, max, exclude});
      } else {
        return randomNumber;
      }
    },
    [],
  );

  const handleNextGuess = useCallback(
    (direction: Direction) => {
      if (finishedGame) return;
      setButtonsDisabled(true);
      if (direction === 'lower') {
        if (currentGuess < enteredNumber) {
          setTimeout(() => {
            setButtonsDisabled(false);
          }, 550);
          return Alert.alert('WE KNOW YOU LYING');
        }
        maxBoundary = currentGuess;
      } else {
        if (currentGuess > enteredNumber) {
          setTimeout(() => {
            setButtonsDisabled(false);
          }, 550);
          return Alert.alert('WE KNOW YOU LYING');
        }
        minBoundary = currentGuess + 1;
      }
      const newRandomNumber = generateRandomNumber({
        min: minBoundary,
        max: maxBoundary,
        exclude: currentGuess,
      });
      setMagiciansGuesses(oldState => [...oldState, currentGuess]);
      setCurrentGuess(newRandomNumber);
      setTimeout(() => {
        setButtonsDisabled(false);
      }, 550);
    },
    [
      finishedGame,
      currentGuess,
      generateRandomNumber,
      enteredNumber,
      setButtonsDisabled,
    ],
  );

  const handleStartNewGame = () => {
    dispatch(StackActions.popToTop());
  };

  /**
   * useEffect
   */

  useEffect(() => {
    const initialGuess = generateRandomNumber({
      min: minBoundary,
      max: maxBoundary,
      exclude: enteredNumber,
    });
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
            bgColor={INPUT_CONTAINER}
            disabled={finishedGame || buttonsDisabled}
            onPress={() => handleNextGuess('lower')}
            label="-"
            textColor="#fff"
          />
        </ButtonContainer>
        <Separator width={10} />
        <ButtonContainer>
          <Button
            bgColor={INPUT_CONTAINER}
            disabled={finishedGame || buttonsDisabled}
            onPress={() => handleNextGuess('greater')}
            label="+"
            textColor="#fff"
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
          <Separator height={10} />
          <Button
            onPress={handleStartNewGame}
            textColor="#fff"
            bgColor={INPUT_CONTAINER}
            label="Start new game!"
          />
        </>
      ) : null}
    </Container>
  );
};
