import {TextStyle, StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {Colors} from '@app/themes';

export const large: TextStyle = {
  fontSize: scale(18),
};

export const normal: TextStyle = {
  fontSize: scale(16),
};

export const small: TextStyle = {
  fontSize: scale(10),
};

export const underline: TextStyle = {
  textDecorationLine: 'underline',
};

export const bold: TextStyle = {
  fontWeight: '700',
};

export const darkSlateGray: TextStyle = {
  color: Colors.darkSlateGray,
};

export const muted: TextStyle = {
  color: Colors.gray,
};

export const white: TextStyle = {
  color: Colors.white,
};

export const textAlignCenter: TextStyle = {
  textAlign: 'center',
};

export const TextStyles = StyleSheet.create({
  bold,
  darkSlateGray,
  large,
  muted,
  normal,
  small,
  textAlignCenter,
  underline,
  white,
});
