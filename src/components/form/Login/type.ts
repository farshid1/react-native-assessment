import {Animated} from 'react-native';

export type LoginFormProps = {
  email: string;
  password: string;
  onEmailChangeText: (email: string) => void;
  onPasswordChangeText: (password: string) => void;
  animatedPaddingValue: Animated.Value;
  onAppleSignUp: () => void;
  onFacebookSignUp: () => void;
  onTermsOfUsePress: () => void;
  onNextPress: () => void;
  onCancelPress: () => void;
};
