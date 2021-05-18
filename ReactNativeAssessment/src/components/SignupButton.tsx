import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  signUpButton: {
    flexDirection: 'row',
    borderColor: '#343434',
    borderWidth: 1,
    borderRadius: 100,
    width: 250,
    padding: 10,
    paddingHorizontal: 18,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#343434',
  },
});
interface ISignUpButton extends TouchableOpacityProps {
  text: string;
  img: React.ReactNode;
}

export default function SignUpButton({
  img: Img,
  text,
  ...rest
}: ISignUpButton) {
  return (
    <TouchableOpacity style={[styles.signUpButton]} {...rest}>
      <View style={{ marginRight: 8 }}>{Img}</View>

      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}
