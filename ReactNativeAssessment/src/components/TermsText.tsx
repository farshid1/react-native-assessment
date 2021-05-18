import React from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  termsText: {
    color: '#7c7c7c',
    textAlign: 'center',
    fontSize: 11,
    marginTop: 42,
  },
});

export function TermsText() {
  return (
    <Text style={styles.termsText}>
      By creating an account, you are indicating that you agree to the
      <Text style={{ textDecorationLine: 'underline' }}> Terms of User </Text>
      and that you are over the age of 13.
    </Text>
  );
}
