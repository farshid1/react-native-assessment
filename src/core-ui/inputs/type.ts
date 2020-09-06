import {TextInputProps, StyleProp, ViewStyle} from 'react-native';

export interface InputProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
}
