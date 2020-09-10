import {StyleSheet} from 'react-native';

import {PALETTE} from 'utils/constants';
import {sizeAdaptivity, sizeX} from 'utils/helpers';

export default StyleSheet.create({
  input: {
    height: sizeX(40),
    borderBottomColor: PALETTE.GREY,
    borderBottomWidth: 1,
    fontSize: sizeAdaptivity(16),
    lineHeight: sizeAdaptivity(18),
    paddingHorizontal: 10,
    paddingVertical: 0,
    marginBottom: 10,
    color: PALETTE.BLACK,
  },
});
