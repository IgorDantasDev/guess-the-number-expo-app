import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {StatCardStyleProps} from './types';

export const Container = styled.View<StatCardStyleProps>`
  border-width: ${RFValue(2)}px;
  border-bottom-width: ${({isLastGuess}) => (isLastGuess ? RFValue(2) : 0)}px;
  border-color: ${({isRightGuess}) => (isRightGuess ? 'green' : 'black')};
  padding: ${RFValue(8)}px;
  justify-content: center;
`;

export const RowContainer = styled.View`
  flex-direction: row;
`;
