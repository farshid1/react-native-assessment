import React, {FC} from 'react';
import {Input} from './Input';
import {InputProps} from './type';

export const PasswordInput: FC<InputProps> = ({
  placeholder = 'Password',
  ...props
}) => (
  <Input
    autoCapitalize="none"
    placeholder={placeholder}
    secureTextEntry
    textContentType="password"
    {...props}
  />
);
