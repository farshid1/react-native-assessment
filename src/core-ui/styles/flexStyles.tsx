import {FlexStyle, StyleSheet} from 'react-native';

export const flexContainer: FlexStyle = {
  flex: 1,
};

export const justifyContentCenter: FlexStyle = {
  justifyContent: 'center',
};

export const alignItemsCenter: FlexStyle = {
  alignItems: 'center',
};

export const flexCenter: FlexStyle = {
  ...flexContainer,
  ...justifyContentCenter,
  ...alignItemsCenter,
};

export const FlexStyles = StyleSheet.create({
  flexContainer,
  justifyContentCenter,
  alignItemsCenter,
  flexCenter,
});
