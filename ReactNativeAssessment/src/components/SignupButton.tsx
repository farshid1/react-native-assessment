import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from '../utils/styles';

interface ISignUpButton {
  text: string;
  img: React.ReactNode;
  //   styles?: StyleProp<ViewStyle>;
}

export default function SignUpButton({ img: Img, text }: ISignUpButton) {
  return (
    <TouchableOpacity style={[styles.signUpButton]}>
      <View style={{ marginRight: 8 }}>{Img}</View>

      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <Text style={{ fontSize: 18, color: '#343434' }}>{text}</Text>
    </TouchableOpacity>
  );
}
