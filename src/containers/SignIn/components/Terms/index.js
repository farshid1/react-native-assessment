import React from 'react';
import {View, Text} from 'react-native';

import style from './style';

export default function Terms() {
  function onPress() {
    // TODO: navigate to Terms
  }

  return (
    <View style={style.wrapper}>
      <Text style={style.text}>
        By creating an account, you are indicating that you agree to the{' '}
        <Text style={style.link} onPress={onPress}>
          Terms&#160;of&#160;Use
        </Text>{' '}
        and that you over the age of 13.
      </Text>
    </View>
  );
}
