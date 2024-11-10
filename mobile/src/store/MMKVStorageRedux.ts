import { Storage } from 'redux-persist';

export const MMKVStorageRedux: Storage = {
  setItem: (key, value) => {
    return Promise.resolve(true);
  },
  getItem: (key) => {
    const value = '';
    return Promise.resolve(value);
  },
  removeItem: (key) => {
    return Promise.resolve();
  },
};
