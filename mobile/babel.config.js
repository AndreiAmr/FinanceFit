module.exports = function (api) {
  api.cache(true);
  return {
    sourceMaps: true,
    presets: [
      'babel-preset-expo',
      ['@babel/preset-env', { targets: { node: 'current' } }],
      '@babel/preset-typescript',
      '@babel/preset-react',
    ],
  };
};
