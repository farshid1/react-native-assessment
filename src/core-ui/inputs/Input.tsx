import React, {FC} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {InputProps} from './type';
import {scale} from 'react-native-size-matters';

export const Input: FC<InputProps> = ({
  containerStyle,
  style,
  ...inputProps
}) => (
  <View style={[styles.container, containerStyle]}>
    <TextInput style={[styles.textInput, style]} {...inputProps} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: scale(10),
  },
  textInput: {
    fontSize: scale(16),
  },
});
