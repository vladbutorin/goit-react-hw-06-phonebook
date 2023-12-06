import React from 'react';
import { createRoot } from 'react-dom/client'; 
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './components/store/store';
import App from './components/App';

const root = document.getElementById('root');
const appRoot = createRoot(root);

appRoot.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);