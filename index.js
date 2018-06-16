const ReactNative = require('react-native');
const {NativeModules} = ReactNative;

const RNLevsNativeModule = NativeModules.LevsNativeModule;
const Toast = {};


Toast.showToast = function (message) {
    RNLevsNativeModule.show("aaaa", 10);
};


module.exports = Toast;