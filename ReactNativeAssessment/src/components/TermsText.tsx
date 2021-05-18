/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text } from 'react-native';

export function TermsText() {
  return (
    <Text
      style={{
        color: '#7c7c7c',
        textAlign: 'center',
        fontSize: 11,
        marginTop: 42,
      }}>
      By creating an account, you are indicating that you agree to the
      <Text style={{ textDecorationLine: 'underline' }}> Terms of User </Text>
      and that you are over the age of 13.
    </Text>
  );
}
