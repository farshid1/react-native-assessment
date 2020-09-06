import {LoginForm} from '@app/components';
import {useKeyboard} from '@react-native-community/hooks';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  FC,
} from 'react';
import {Animated} from 'react-native';
import {verticalScale} from 'react-native-size-matters';

const noop = () => {};

export const LoginScreen: FC = () => {
  const keyboard = useKeyboard();
  const paddingBottomAnim = useRef(new Animated.Value(0)).current;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const keyboardHeight = useMemo(() => {
    return keyboard.keyboardShown ? keyboard.keyboardHeight : 0;
  }, [keyboard.keyboardHeight, keyboard.keyboardShown]);

  const animatePaddingIn = useCallback(
    () =>
      Animated.timing(paddingBottomAnim, {
        toValue: verticalScale(keyboardHeight * 0.85),
        duration: 200,
        useNativeDriver: false,
      }).start(),
    [keyboardHeight, paddingBottomAnim],
  );

  const animatePaddingOut = useCallback(
    () =>
      Animated.timing(paddingBottomAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start(),
    [paddingBottomAnim],
  );

  useEffect(() => {
    if (keyboardHeight > 0) {
      animatePaddingIn();
    } else {
      animatePaddingOut();
    }
  }, [animatePaddingIn, animatePaddingOut, keyboardHeight]);

  return (
    <LoginForm
      {...{email, password}}
      onEmailChangeText={setEmail}
      onPasswordChangeText={setPassword}
      animatedPaddingValue={paddingBottomAnim}
      onAppleSignUp={noop}
      onFacebookSignUp={noop}
      onCancelPress={() => {
        setEmail('');
        setPassword('');
      }}
      onNextPress={noop}
      onTermsOfUsePress={noop}
    />
  );
};
