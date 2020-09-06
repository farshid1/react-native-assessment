import React, {FC} from 'react';
import {Input} from './Input';
import {InputProps} from './type';

export const EmailInput: FC<InputProps> = ({
  placeholder = 'Email',
  ...props
}) => (
  <Input
    autoCapitalize="none"
    keyboardType="email-address"
    placeholder={placeholder}
    textContentType="emailAddress"
    {...props}
  />
);
