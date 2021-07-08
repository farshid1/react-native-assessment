import {ImageSourcePropType, TouchableOpacityProps} from 'react-native';

type ButtonBaseProps = {
  title: string;
} & TouchableOpacityProps;

export type SocialButtonProps = {
  leftIcon: ImageSourcePropType;
  iconSize?: number;
} & ButtonBaseProps;

export type RoundedButtonProps = ButtonBaseProps;
