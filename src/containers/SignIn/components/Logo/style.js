import {StyleSheet} from 'react-native';

import {PALETTE} from 'utils/constants';
import {sizeX, sizeY} from 'utils/helpers';

export default StyleSheet.create({
  wrapper: {
    paddingVertical: sizeX(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: sizeX(150),
    height: sizeY(80),
    backgroundColor: PALETTE.WHITE,
  },
});
