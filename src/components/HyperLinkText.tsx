import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface Props {
  children: string;
  onPress: () => void;
}

export const HyperLinkText = ({ children, onPress }: Props) => (
  <Text style={styles.text} onPress={onPress}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  text: {
    textDecorationLine: 'underline',
  },
});
