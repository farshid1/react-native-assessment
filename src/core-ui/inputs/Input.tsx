import React, {FC} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {InputProps} from './type';
import {scale} from 'react-native-size-matters';
import {Colors} from '@app/themes';

export const Input: FC<InputProps> = ({
  containerStyle,
  style,
  ...inputProps
}) => (
  <View style={[styles.container, containerStyle]}>
    <TextInput
      placeholderTextColor={Colors.gray}
      style={[styles.textInput, style]}
      {...inputProps}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: scale(1),
    borderColor: Colors.lightGray,
    padding: scale(16),
  },
  textInput: {
    fontSize: scale(16),
  },
});
