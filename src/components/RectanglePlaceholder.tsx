import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { colors } from '../constants/colors';

const screen = Dimensions.get('screen');

export const RectanglePlaceholder = () => (
  <View style={styles.container}>
    <View style={styles.rectangle} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: screen.height * 0.4,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangle: {
    width: screen.height * 0.25,
    height: screen.height * 0.2,
    backgroundColor: colors.white,
  },
});
