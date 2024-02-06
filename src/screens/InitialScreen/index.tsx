import React, {useCallback, useEffect, useState} from 'react';

import {Alert} from 'react-native';
import {
  useNavigation,
  NavigationProp,
  useIsFocused,
} from '@react-navigation/native';

import {
  ButtonContainer,
  ButtonsRowContainer,
  Container,
  Header,
  Input,
  InputContainer,
} from './styles';

import {Button} from '~/components/Button';
import {Separator} from '~/components/Separator';
import {Icon} from '~/components/Icon';
import {Text} from '~/components/Text';

export const InitialScreen: React.FC = () => {
  /**
   * Hooks
   */

  const {navigate} = useNavigation<NavigationProp<StackParamList>>();
  const isFocused = useIsFocused();

  /**
   * States
   */

  const [enteredNumber, setEnteredNumber] = useState('');

  /**
   * Callbacks
   */

  const handleResetButton = () => {
    setEnteredNumber('');
  };

  const handleConfirmButton = useCallback(() => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      return Alert.alert(
        'Número inválido!',
        'O número precisa ser um número entre 0 e 99',
      );
    } else {
      navigate('GameScreen', {enteredNumber: chosenNumber});
    }
  }, [enteredNumber, navigate]);

  /**
   * Effects
   */

  useEffect(() => {
    if (isFocused) {
      setEnteredNumber('');
    }
  }, [isFocused]);

  return (
    <Container>
      <Header>
        <Icon size={50} icon="hat" />
        <Text isBold size={26}>
          Guess the number!
        </Text>
      </Header>
      <Separator height={10} />
      <InputContainer>
        <Input
          keyboardType="number-pad"
          maxLength={2}
          value={enteredNumber}
          onChangeText={setEnteredNumber}
        />
        <Separator height={10} />
        <ButtonsRowContainer>
          <ButtonContainer>
            <Button onPress={handleResetButton} label="Reset" />
          </ButtonContainer>
          <Separator width={10} />
          <ButtonContainer>
            <Button onPress={handleConfirmButton} label="Confirm" />
          </ButtonContainer>
        </ButtonsRowContainer>
      </InputContainer>
      <Separator height={10} />
    </Container>
  );
};
