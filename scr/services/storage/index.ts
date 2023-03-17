import { AsyncStorage } from '../../modules';
import Keys from './keys';

export default class Storage {
  static clearWholeStorage(): void {
    AsyncStorage.clear();
  }

  static clearUserStorage(): void {
    const keys = [Keys.TOKEN];
    AsyncStorage.multiRemove(keys);
  }

  static async setToken(token: Token): Promise<void> {
    AsyncStorage.setItem(Keys.TOKEN, JSON.stringify(token));
  }

  static async getToken(): Promise<Token> {
    const token = await AsyncStorage.getItem(Keys.TOKEN);
    return token ? JSON.parse(token) : '';
  }

  static async setFCMToken(fcmToken: string): Promise<void> {
    AsyncStorage.setItem(Keys.FCM_TOKEN, fcmToken || '');
  }

  static async getFCMToken(): Promise<string> {
    const fcmToken = await AsyncStorage.getItem(Keys.FCM_TOKEN);
    return fcmToken || '';
  }
}
