import { AppRegistery } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';

import store from './src/stores';

const ReactNativeRender = () =>
  <Provider store={store}>
    {() => <App />}
  </Provider>

AppRegistery.registerComponent('Inro', () => ReactNativeRender);
