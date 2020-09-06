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
      style={[styles.textInput, style]}
      placeholderTextColor={Colors.gray}
      {...inputProps}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: scale(1),
    padding: scale(10),
    borderColor: Colors.lightGray,
  },
  textInput: {
    fontSize: scale(16),
  },
});
