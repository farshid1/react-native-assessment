import React, {FC} from 'react';
import {TextProps} from 'react-native';
import {TextStyles} from 'core-ui/styles/textStyles';
import {Text} from './Text';

export const UnderlineText: FC<TextProps> = ({style, ...props}) => (
  <Text style={[TextStyles.underline, style]} {...props} />
);
