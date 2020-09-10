import {StyleSheet} from 'react-native';

import {PALETTE} from 'utils/constants';
import {sizeAdaptivity} from 'utils/helpers';

export default StyleSheet.create({
  link: {
    padding: 5,
  },
  text: {
    fontSize: sizeAdaptivity(16),
    lineHeight: sizeAdaptivity(18),
    textDecorationLine: 'underline',
    color: PALETTE.GREY,
  },
});
