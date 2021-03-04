import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('session', value);
  } catch (e) {
    console.log(e);
  }
}

export const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('session')
    if(value !== null) {
      return value;
    }
  } catch(e) {
    console.log(e);
  }
}

export const deleteData = async () => {
    try {
        await AsyncStorage.removeItem('session');
        return true;
    }
    catch(exception) {
        return false;
    }
}
