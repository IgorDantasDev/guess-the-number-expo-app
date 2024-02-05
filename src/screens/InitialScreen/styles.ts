import {RFValue} from 'react-native-responsive-fontsize';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: ${RFValue(16)}px;
  background-color: #ccc;
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;
`;

export const InputContainer = styled.View`
  justify-content: center;
  background-color: #8b2635;
  border-radius: ${RFValue(8)}px;
  padding: ${RFValue(16)}px;
  align-items: center;
  elevation: 1;
`;

export const Input = styled.TextInput`
  height: ${RFValue(50)}px;
  width: ${RFValue(50)}px;
  font-weight: bold;
  font-size: ${RFValue(32)}px;
  text-align: center;
  border-bottom-width: ${RFValue(2)}px;
  border-bottom-color: #d3efbd;
`;

export const ButtonsRowContainer = styled.View`
  flex-direction: row;
  /* justify-content: space-between; */
`;

export const ButtonContainer = styled.View`
  flex: 1;
`;
