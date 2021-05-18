import React from 'react';
import { TextInput } from 'react-native';
import { colors, styles } from '../utils/styles';
interface IAppTextInput {
  placeholder: string;
  isSecureTextEntry?: boolean;
}
export function AppTextInput({
  placeholder,
  isSecureTextEntry = false,
}: IAppTextInput) {
  return (
    <TextInput
      secureTextEntry={isSecureTextEntry}
      placeholder={placeholder}
      placeholderTextColor={colors.placeholderText}
      style={styles.textInput}
    />
  );
}
