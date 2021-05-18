import { StyleSheet } from 'react-native';

const colors = {
  placeholderText: '#707070',
  appBackground: '#fcfcfc',
};

const globalStyles = StyleSheet.create({
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.18,
    shadowRadius: 5.84,

    elevation: 4,
  },
});

export { globalStyles, colors };
