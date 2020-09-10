import React, {forwardRef, useState, useEffect} from 'react';
import {TextInput} from 'react-native';
import PropTypes from 'prop-types';

import {PALETTE} from 'utils/constants';

import style from './style';

const TextInputComponent = forwardRef((props, ref) => {
  const {
    value = '',
    textContentType = null,
    placeholder = '',
    placeholderTextColor = PALETTE.GREY,
    autoCapitalize = 'none',
    autoFocus = false,
    editable = true,
    multiline = false,
    numberOfLines = 1,
    onChangeText = () => {},
    onBlur = () => {},
    onSubmitEditing = () => {},
    secureTextEntry,
    keyboardType,
  } = props;

  const [inputWidth, setInputWidth] = useState('99%');

  useEffect(() => {
    setInputWidth('100%');
  }, []);

  return (
    <TextInput
      ref={ref}
      value={value || null}
      textContentType={textContentType}
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      autoCapitalize={autoCapitalize}
      autoFocus={autoFocus}
      editable={editable}
      multiline={multiline}
      numberOfLines={numberOfLines}
      style={[style.input, {width: inputWidth}]}
      onChangeText={onChangeText}
      onBlur={onBlur}
      onSubmitEditing={onSubmitEditing}
      selectTextOnFocus
      keyboardType={keyboardType}
    />
  );
});

TextInputComponent.propTypes = {
  value: PropTypes.string,
  textContentType: PropTypes.string,
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  autoCapitalize: PropTypes.string,
  editable: PropTypes.bool,
  multiline: PropTypes.bool,
  numberOfLines: PropTypes.number,
  onChangeText: PropTypes.func,
  onBlur: PropTypes.func,
  keyboardType: PropTypes.string,
};

export default TextInputComponent;
