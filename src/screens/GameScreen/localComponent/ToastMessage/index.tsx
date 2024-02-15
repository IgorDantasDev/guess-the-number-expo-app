import React from 'react';
import {View} from 'react-native';
import Toast from 'react-native-toast-message';

// import { Container } from './styles';

export const ToastMessage = () => {
  return Toast.show({
    type: 'success',
    text1: 'The magician found your number!',
    text2: 'See the stats below',
  });
};
