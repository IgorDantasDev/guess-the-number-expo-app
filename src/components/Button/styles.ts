import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(40)}px;
  background-color: #2e3532;
  align-items: center;
  justify-content: center;
  border-radius: ${RFValue(10)}px;
`;
