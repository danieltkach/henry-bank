import React from 'react'
import App from './App.js'
import store from './src/stores'
import { Provider } from 'react-redux'
import { registerRootComponent } from 'expo';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const NewRootComponent = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default NewRootComponent;

// import { AppRegistery } from 'react-native';
// import App from './App';
// import { name as appName } from './app.json';
// import { Provider } from 'react-redux';
//
// import store from './src/stores';
//
// const ReactNativeRender = () =>
//   <Provider store={store}>
//     {() => <App />}
//   </Provider>
//
// AppRegistery.registerComponent('Inro', () => ReactNativeRender);
