module.exports = function(api) {
  api.cache(true);
  return {
    plugins: ['@babel/plugin-transform-runtime'],
    presets: ['babel-preset-expo'],
  };
};
