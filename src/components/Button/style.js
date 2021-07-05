import {StyleSheet} from 'react-native';

import {PALETTE} from 'utils/constants';
import {sizeAdaptivity, sizeX} from 'utils/helpers';

export default StyleSheet.create({
  button: {
    borderRadius: sizeX(30),
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    height: sizeX(60),
    textAlign: 'center',
    fontSize: sizeAdaptivity(10),
    lineHeight: sizeAdaptivity(18),
    backgroundColor: PALETTE.BLUE,
    shadowColor: PALETTE.BLACK,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.13,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonDisabled: {
    backgroundColor: PALETTE.GREY,
  },
  buttonText: {
    fontSize: sizeAdaptivity(18),
    lineHeight: sizeAdaptivity(24),
    color: PALETTE.WHITE,
    flexGrow: 1,
    textAlign: 'center',
  },
  buttonTextDisabled: {
    color: PALETTE.WHITE,
  },
});
