import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import Logo from './components/Logo';
import Form from './components/Form';

import style from './style';

export default function SignIn() {
  return (
    <KeyboardAwareScrollView
      enableOnAndroid
      nestedScrollEnabled
      removeClippedSubviews={false}
      style={style.scrollWrapper}
      contentContainerStyle={style.contentWrapper}
      keyboardShouldPersistTaps="handled">
      <Logo />
      <Form />
    </KeyboardAwareScrollView>
  );
}
