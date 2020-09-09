import React from 'react';
import { Alert } from 'react-native';
import { SocialLoginButton } from './common/SocialLoginButton';

import apple from '../assets/images/apple.png';

export const AppleLoginButton = () => {
  const onPressHandler = () => {
    Alert.alert('Under construction');
  };

  return <SocialLoginButton logo={apple} title={'Sign up with Apple'} onPress={onPressHandler} />;
};
