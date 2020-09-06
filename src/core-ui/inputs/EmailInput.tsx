import React, {FC} from 'react';
import {TextInputProps, TextInput} from 'react-native';

export const EmailInput: FC<TextInputProps> = (props) => (
  <TextInput
    textContentType="emailAddress"
    keyboardType="email-address"
    {...props}
  />
);
