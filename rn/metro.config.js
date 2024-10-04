const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  watchFolders: [require('node:path').resolve(__dirname, '..')],
  resolver: {
    unstable_enableSymlinks: true,
  },
};
module.exports = mergeConfig(getDefaultConfig(__dirname), config);
