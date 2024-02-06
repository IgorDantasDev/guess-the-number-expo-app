import {TouchableOpacityProps} from 'react-native';

export interface ButtonProps extends TouchableOpacityProps, ButtonStyleProps {
  label: string;
}

export interface ButtonStyleProps {
  bgColor?: string;
  textColor?: string;
}
