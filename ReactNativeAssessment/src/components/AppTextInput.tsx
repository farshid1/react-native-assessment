import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { colors, styles } from '../utils/styles';
interface IAppTextInput extends TextInputProps {
  placeholder: string;
  isSecureTextEntry?: boolean;
}
export function AppTextInput({
  placeholder,
  isSecureTextEntry = false,
  ...rest
}: IAppTextInput) {
  return (
    <TextInput
      secureTextEntry={isSecureTextEntry}
      placeholder={placeholder}
      placeholderTextColor={colors.placeholderText}
      style={styles.textInput}
      {...rest}
    />
  );
}
