import React, {FC} from 'react';
import {View} from 'react-native';
import {scale} from 'react-native-size-matters';

export const Spacer: FC<{size?: number}> = ({size = 4}) => (
  <View style={{marginVertical: scale(size)}} />
);
