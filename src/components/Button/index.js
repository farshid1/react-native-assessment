import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import style from './style';

function Button({text, disabled, onPress = () => {}, customStyle = {}}) {
  function onPressHandler() {
    if (!disabled) {
      onPress();
    }
  }

  return (
    <TouchableOpacity
      onPress={onPressHandler}
      style={[style.button, customStyle, disabled && style.buttonDisabled]}>
      <Text style={[style.buttonText, disabled && style.buttonTextDisabled]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  customStyle: PropTypes.object,
};

export default Button;
