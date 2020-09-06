module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@app/assets': './src/assets',
          '@app/core-ui': './src/core-ui',
          '@app/components': './src/components',
          '@app/screens': './src/screens',
          '@app/themes': './src/themes',
        },
      },
    ],
  ],
};
