import {StyleSheet} from 'react-native';

import {PALETTE} from 'utils/constants';
import {sizeY} from 'utils/helpers';

export default StyleSheet.create({
  wrap: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom: sizeY(20),
  },
  form: {
    width: '100%',
    marginBottom: sizeY(10),
  },
  inputBlock: {
    position: 'relative',
  },
  error: {
    position: 'absolute',
    bottom: -10,
    left: 10,
    right: 10,
    zIndex: 1,
    flexDirection: 'row-reverse',
  },
  errorText: {
    color: PALETTE.RED,
  },
  button: {
    marginBottom: 40,
  },
});
