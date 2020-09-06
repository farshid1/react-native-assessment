import React, {FC} from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {FlexStyles, TextStyles} from '../styles';
import {Colors} from '@app/themes';

export const RoundedButton: FC<TouchableOpacityProps & {title: string}> = ({
  title,
  disabled,
  style,
  ...touchableOpacityProps
}) => (
  <TouchableOpacity
    accessibilityLabel="Next"
    disabled={disabled}
    style={[
      FlexStyles.justifyContentCenter,
      FlexStyles.alignItemsCenter,
      {
        backgroundColor: disabled ? Colors.lightGray : Colors.crimson,
      },
      style,
    ]}
    {...touchableOpacityProps}>
    <Text
      style={[
        TextStyles.large,
        TextStyles.bold,
        TextStyles.textAlignCenter,
        TextStyles.white,
      ]}>
      {title}
    </Text>
  </TouchableOpacity>
);
