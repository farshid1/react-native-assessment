import React from 'react';
import { Alert } from 'react-native';
import { SocialLoginButton } from './common/SocialLoginButton';

import facebook from '../assets/images/facebook.png';

export const FacebookLoginButton = () => {
  const onPressHandler = () => {
    Alert.alert('Under construction');
  };

  return <SocialLoginButton logo={facebook} title={'Sign up with Facebook'} onPress={onPressHandler} />;
};
