import * as firebase from 'firebase';
import uuid from 'uuid/v1';
import { AsyncStorage } from 'react-native';

export default firebase.initializeApp({
  apiKey: 'AIzaSyBnrDq9srpHPdYvOH9I_24twex2YM4U8Wo',
  authDomain: 'simple-profile-481fe.firebaseapp.com',
  databaseURL: 'https://simple-profile-481fe.firebaseio.com',
  storageBucket: 'simple-profile-481fe.appspot.com',
});

export const storageKey = '@ProfileApp:key';

export function getKey() {
  return AsyncStorage
    .getItem(storageKey)
    .then((key) => {
      if (key) {
        return key;
      }
      const newKey = uuid();
      return AsyncStorage.setItem(storageKey, newKey).then(() => newKey);
    });
}
