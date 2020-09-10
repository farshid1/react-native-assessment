import {StyleSheet} from 'react-native';

import {PALETTE} from 'utils/constants';
import {sizeAdaptivity, sizeX} from 'utils/helpers';

export default StyleSheet.create({
  wrapper: {
    paddingVertical: sizeX(20),
  },
  text: {
    textAlign: 'center',
    fontSize: sizeAdaptivity(10),
    lineHeight: sizeAdaptivity(18),
    color: PALETTE.GREY,
  },
  link: {
    fontSize: sizeAdaptivity(10),
    lineHeight: sizeAdaptivity(18),
    textDecorationLine: 'underline',
    color: PALETTE.GREY,
  },
});
