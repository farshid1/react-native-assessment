import React, {FC} from 'react';
import {Text} from './Text';
import {TextProps} from 'react-native';
import {TextStyles} from '../styles';

export const SmallText: FC<TextProps> = ({style, ...props}) => (
  <Text style={[TextStyles.small, style]} {...props} />
);
