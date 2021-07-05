import {DEVICE_WIDTH, PLATFORM, SCREEN} from './constants';
import {PixelRatio} from 'react-native';

export const getErrorMessage = (e) => {
  if (typeof e === 'string') {
    return e;
  }
  return e?.response?.data?.message || null;
};

export const getErrorsText = (errors = {}) => {
  const errorsKeys = Object.keys(errors);
  if (errorsKeys.length) {
    let text = '';
    errorsKeys.forEach((key) => {
      if (Array.isArray(errors[key]) && errors[key].length) {
        text += errors[key].join(' ');
      } else if (typeof errors[key] === 'string') {
        text += errors[key];
      }
    });
    return text;
  }
  return null;
};

export function wait(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

const isIos = PLATFORM === 'ios';
// const IPHONE6_DEVICE_WIDTH = 375;
// const IPHONE6_DEVICE_HEIGHT = 667;
const IPHONE6_DEVICE_WIDTH = 320;
const IPHONE6_DEVICE_HEIGHT = 568;
const scale = DEVICE_WIDTH / IPHONE6_DEVICE_WIDTH;

export function sizeAdaptivity(size) {
  const newSize = size * scale;

  return isIos
    ? Math.round(PixelRatio.roundToNearestPixel(newSize))
    : Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
}

export const sizeX = (width) => (SCREEN.width / IPHONE6_DEVICE_WIDTH) * width;

export const sizeY = (height) =>
  (SCREEN.height / IPHONE6_DEVICE_HEIGHT) * height;
