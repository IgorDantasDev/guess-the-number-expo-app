import {ReactNode} from 'react';
import {TextProps} from 'react-native';

export type TextAlign = 'start' | 'end' | 'center' | 'justify';
export interface Props extends TextProps {
  color?: string;
  size?: number;
  isBold?: boolean;
  children: string | ReactNode;
  alignSelf?: TextAlign;
}
