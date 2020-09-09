import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';

interface Props {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

export const NextButton = ({ title, onPress, disabled }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View style={[styles.container, disabled && styles.disabled]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.alto,
    width: 220,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
  },
  disabled: {
    opacity: 0.5,
  },
});
