import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import { colors } from '../utils/styles';

const styles = StyleSheet.create({
  textInput: {
    fontSize: 16,
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 2,
    paddingLeft: 8,

    height: 64,
  },
});
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
