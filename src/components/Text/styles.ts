import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {Props} from './types';

export const Container = styled.Text<Props>`
  font-size: ${({size}) => RFValue(size)}px;
  color: ${({color}) => color};
  ${({isBold}) => !!isBold && `font-weight: bold`};
  ${({alignSelf}) => !!alignSelf && `align-self: ${alignSelf}`};
`;
