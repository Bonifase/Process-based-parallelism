import React from 'react';
import { Provider } from 'react-redux';
import Navigation from './navigation/Navigation';
import store from './store/reducers/store';

export default function App() {
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>

  );
}