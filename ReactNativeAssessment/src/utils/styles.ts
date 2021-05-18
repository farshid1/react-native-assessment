import { StyleSheet } from 'react-native';

const colors = {
  placeholderText: '#707070',
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 16,
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 2,
    paddingLeft: 8,

    height: 64,
  },
  signUpButton: {
    flexDirection: 'row',
    borderColor: '#343434',
    borderWidth: 1,
    borderRadius: 100,
    width: 250,
    padding: 10,
    paddingHorizontal: 18,

    alignItems: 'center',
    marginBottom: 10,
  },

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

export { styles, colors };
