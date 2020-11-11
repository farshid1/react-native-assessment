import React from 'react';
import { View } from 'react-native';

const DEFAULT_DISTANCE = 10;

interface Props {
  distance?: number;
}

export const Spacer = ({ distance = DEFAULT_DISTANCE }: Props) => <View style={{ height: distance }} />;
