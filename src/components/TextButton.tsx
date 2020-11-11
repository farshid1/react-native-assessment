import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';

interface Props {
  title: string;
  onPress: () => void;
}

export const TextButton = ({ title, onPress }: Props) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  title: {
    textDecorationLine: 'underline',
    fontSize: 16,
    fontWeight: '500',
    color: colors.boulder,
  },
});
