module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
        alias: {
          '@': '.',
          '@atoms': './src/atomic/atoms',
          '@molecules': './src/atomic/molecules',
          '@organisms': './src/atomic/organisms',
          '@store': './src/store',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@assets': './src/assets',
          '@templates': './src/templates',
          '@models': './src/models',
          '@generators': './src/generators',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
