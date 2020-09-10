import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import style from './style';

function Button({text, onPress = () => {}}) {
  return (
    <TouchableOpacity onPress={onPress} style={style.link}>
      <Text style={style.text}>{text}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

export default Button;
