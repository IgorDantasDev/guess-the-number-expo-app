import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {ButtonStyleProps} from './types';

export const Container = styled.TouchableOpacity<ButtonStyleProps>`
  width: 100%;
  height: ${RFValue(40)}px;
  background-color: ${({bgColor}) => bgColor};
  align-items: center;
  justify-content: center;
  border-radius: ${RFValue(10)}px;
`;
