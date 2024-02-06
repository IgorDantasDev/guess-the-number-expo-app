import {StackNavigationProp} from '@react-navigation/stack';

declare global {
  export type StackParamList = {
    InitialScreen: undefined;
    GameScreen: {enteredNumber: number};
    GameOverScreen: undefined;
  };
}

export type StackNavigatorProp = StackNavigationProp<
  StackParamList,
  'InitialScreen'
>;
