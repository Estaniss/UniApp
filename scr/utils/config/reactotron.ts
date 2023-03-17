import { NativeModules } from 'react-native';
import { Reactotron as ReactotronCore } from 'reactotron-core-client';
import Reactotron, { ReactotronReactNative } from 'reactotron-react-native';
import ReactotronFlipper from 'reactotron-react-native/dist/flipper';
import AsyncStorage from '@react-native-community/async-storage';

declare global {
  interface Console {
    tron: ReactotronCore<ReactotronReactNative> & ReactotronReactNative;
  }
}

if (__DEV__) {
  const { scriptURL } = NativeModules.SourceCode;
  const scriptHostname = scriptURL.split('://')[1].split(':')[0];
  const tron = Reactotron.setAsyncStorageHandler!(AsyncStorage)
    .configure({
      name: 'reactnativetemplate',
      host: scriptHostname,
      createSocket: path => new ReactotronFlipper(path),
    })
    .useReactNative()
    .connect();

  console.tron = tron;
}
