import {StyleSheet} from 'react-native';

import {PALETTE} from 'utils/constants';
import {sizeX, sizeY, sizeAdaptivity} from 'utils/helpers';

export default StyleSheet.create({
  wrapper: {
    paddingVertical: sizeX(20),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    marginVertical: sizeY(5),
    borderRadius: sizeX(20),
    borderWidth: 1,
    borderColor: PALETTE.GREY_DARK,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    height: sizeX(40),
  },
  buttonIcon: {
    width: sizeX(30),
    height: sizeX(30),
    resizeMode: 'cover',
  },
  buttonTextCol: {
    paddingLeft: sizeX(10),
    paddingRight: sizeX(5),
    flexGrow: 1,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: sizeAdaptivity(16),
    lineHeight: sizeAdaptivity(18),
    color: PALETTE.GREY_DARK,
    width: '100%',
  },
});
