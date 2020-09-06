import React, {FC} from 'react';
import {Input} from './Input';
import {InputProps} from './type';

export const EmailInput: FC<InputProps> = ({
  placeholder = 'Email',
  ...props
}) => (
  <Input
    placeholder={placeholder}
    textContentType="emailAddress"
    keyboardType="email-address"
    {...props}
  />
);
