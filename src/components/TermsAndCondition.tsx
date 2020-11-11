import React from 'react';
import { Text, Linking, StyleSheet } from 'react-native';
import { HyperLinkText } from './HyperLinkText';

import { termOfUse } from '../constants/urls';
import { colors } from '../constants/colors';

export const TermsAndCondition = () => (
  <Text style={styles.text}>
    By creating an account, you are indicating that you agree to the{' '}
    <HyperLinkText onPress={() => Linking.openURL(termOfUse)}>Term of Use</HyperLinkText> and that you are over age of
    13.
  </Text>
);

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: colors.boulder,
  },
});
