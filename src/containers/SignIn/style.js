import {StyleSheet} from 'react-native';

import {PALETTE} from 'utils/constants';
import {sizeX} from 'utils/helpers';

export default StyleSheet.create({
  scrollWrapper: {
    backgroundColor: PALETTE.GREY_BACKGROUND,
  },
  contentWrapper: {
    paddingHorizontal: sizeX(25),
    paddingVertical: sizeX(20),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
