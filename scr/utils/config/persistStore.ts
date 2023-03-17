import { configurePersistable } from 'mobx-persist-store';
import AsyncStorage from '@react-native-community/async-storage';

configurePersistable({
  debugMode: false,
  storage: AsyncStorage,
});
