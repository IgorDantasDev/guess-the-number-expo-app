import React from 'react';
import {NavigationContainer, NavigationProp} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {GameOverScreen} from '~/screens/GameOverScreen';
import {GameScreen} from '~/screens/GameScreen';
import {InitialScreen} from '~/screens/InitialScreen';

const {Navigator, Screen} = createStackNavigator<StackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="InitialScreen">
        <Screen name="InitialScreen" component={InitialScreen} />
        <Screen name="GameScreen" component={GameScreen} />
        <Screen name="GameOverScreen" component={GameOverScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
