import React, {FC} from 'react';
import {TextInput, TextInputProps} from 'react-native';

export const PasswordInput: FC<TextInputProps> = (props) => (
  <TextInput textContentType="password" secureTextEntry {...props} />
);
