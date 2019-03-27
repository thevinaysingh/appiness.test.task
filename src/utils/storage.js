
import { AsyncStorage } from 'react-native';

export const getItemWithKey = async (key, action) => {
  try {
    const data = await AsyncStorage.getItem(key);
    const parsedData = JSON.parse(data);

    action(parsedData);
  } catch (error) {
    action(null);
  }
};

export const setItemWithKeyAndValue = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));

    return true;
  } catch (error) {
    return false;
  }
};

export const deleteItem = async (key) => {
  try {
    await AsyncStorage.removeItem(key);

    return true;
  } catch (error) {
    return false;
  }
};

export const clearAsyncStorage = async () => {
  try {
    await AsyncStorage.clear();

    return true;
  } catch (error) {
    return false;
  }
};

export const StorageKeys = {
  APP_ACCESS_TOKEN: 'APP_ACCESS_TOKEN',
};
