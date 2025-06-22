import { MMKV } from 'react-native-mmkv';
import { Storage } from 'redux-persist';

// Initialize MMKV storage
const storage = new MMKV();

// Create a redux-persist compatible storage adapter
const reduxStorage: Storage = {
  setItem: (key, value) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },

  getItem: key => {
    const value = storage.getString(key);
    return Promise.resolve(value ?? null);
  },

  removeItem: key => {
    storage.delete(key);
    return Promise.resolve();
  },
};

export default reduxStorage;
