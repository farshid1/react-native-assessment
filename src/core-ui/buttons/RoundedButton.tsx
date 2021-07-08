import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {FlexStyles, TextStyles} from '../styles';
import {Colors} from '@app/themes';
import {RoundedButtonProps} from './type';

export const RoundedButton: FC<RoundedButtonProps> = ({
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
