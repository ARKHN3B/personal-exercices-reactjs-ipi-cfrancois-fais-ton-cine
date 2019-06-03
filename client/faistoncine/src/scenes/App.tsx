import React                from 'react';
import { PersistGate }      from 'redux-persist/integration/react';
import { Provider }         from 'react-redux'
import CustomRouter         from '../router/CustomRouter';
import { persistor, store } from '../store';
/** Import css */
import './App.css';

/**
 * The provider component makes the Redux store available to the entire appllication (sub-components)
 * @returns {any}
 * @constructor
 */
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <CustomRouter/>
      </PersistGate>
    </Provider>
  );
}

export default App;
