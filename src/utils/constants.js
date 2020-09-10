import {Dimensions, Platform} from 'react-native';

export const PLATFORM = Platform.OS === 'ios' ? 'ios' : 'android';

const device = Dimensions.get('window');

export const SCREEN = Dimensions.get('screen');

// Remove it and use SIZES
export const DEVICE_WIDTH = device.width;
export const DEVICE_HEIGHT = device.height;

export const PALETTE = {
  WHITE: '#fff',
  BLACK: '#000',
  GREEN: 'green',
  BLUE: '#1b0c75',
  GREY_DARK: '#343434',
  GREY: '#c1c1c1',
  RED: '#B22A0D',
  YELLOW: '#fbda1d',
  PURPLE: '#715ef3',
  GREY_BACKGROUND: '#fcfcfc',
  TRANSPARENT: 'transparent',
};

export const STATUS_BAR_TYPE = {
  DARK_CONTENT: 'dark-content',
  LIGHT_CONTENT: 'light-content',
  DEFAULT: 'dark-content',
};
