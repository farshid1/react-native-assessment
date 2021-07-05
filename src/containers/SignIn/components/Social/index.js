import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import style from './style';

export default function Social() {
  return (
    <View style={style.wrapper}>
      <View>
        <TouchableOpacity style={style.button}>
          <Image
            source={require('assets/images/apple.png')}
            style={style.buttonIcon}
          />
          <View style={style.buttonTextCol}>
            <Text style={style.buttonText}>Sign up with Apple</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <Image
            source={require('assets/images/facebook.png')}
            style={style.buttonIcon}
          />
          <View style={style.buttonTextCol}>
            <Text style={style.buttonText}>Sign up with Facebook</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
