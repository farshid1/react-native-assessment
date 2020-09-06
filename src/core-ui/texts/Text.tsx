import React, {FC} from 'react';
import {Text as RNText, TextProps} from 'react-native';
import {TextStyles} from 'core-ui/styles/textStyles';

export const Text: FC<TextProps> = ({style, ...props}) => (
  <RNText
    style={[TextStyles.normal, TextStyles.darkSlateGray, style]}
    {...props}
  />
);
