import {RFValue} from 'react-native-responsive-fontsize';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

import {BACKGROUND_COLOR} from '~/constants/colors';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${BACKGROUND_COLOR};
  padding: ${RFValue(16)}px;
`;

export const Header = styled.View`
  padding: ${RFValue(8)}px;
  justify-content: center;
  align-items: center;
  border-width: ${RFValue(2)}px;
`;

export const ContentGuess = styled.View`
  justify-content: center;
  align-items: center;
`;

export const NumberContainer = styled.View`
  justify-content: center;
  align-items: center;
  border-width: ${RFValue(2)}px;
  width: ${RFValue(100)}px;
  border-radius: ${RFValue(8)}px;
`;

export const ButtonContainer = styled.View`
  flex: 1;
`;

export const ButtonsRowContainer = styled.View`
  flex-direction: row;
  /* justify-content: space-between; */
`;
