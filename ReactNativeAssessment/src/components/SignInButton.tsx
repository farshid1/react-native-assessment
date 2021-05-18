import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
} from 'react-native';
import { globalStyles } from '../utils/styles';

const styles = StyleSheet.create({
  nextButton: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 100,
    width: 280,
    height: 67,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

interface ISignInButton extends TouchableOpacityProps {
  text: string;
  disabled: boolean;
}

export default function SignInButton({
  text,
  disabled,
  ...rest
}: ISignInButton) {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: disabled ? '#d5d5d5' : '#0095ff',
        },
        styles.nextButton,
        globalStyles.shadow,
      ]}
      {...rest}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
