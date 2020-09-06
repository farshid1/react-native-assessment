import {FlexStyle, StyleSheet} from 'react-native';

export const flexContainer: FlexStyle = {
  flex: 1,
};

export const flexDirectionRow: FlexStyle = {
  flexDirection: 'row',
};

export const justifyContentCenter: FlexStyle = {
  justifyContent: 'center',
};

export const justifyContentSpaceBetween: FlexStyle = {
  justifyContent: 'space-between',
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
  alignItemsCenter,
  flexCenter,
  flexContainer,
  flexDirectionRow,
  justifyContentCenter,
  justifyContentSpaceBetween,
});
