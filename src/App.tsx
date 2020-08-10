import React from 'react';

import Layout from './components/Layout';

import { Provider } from 'react-redux';

import store from './store'; 

import GlobalStyles from './styles/GlobalStyles';


function App() {
  return (
    <Provider store={store}>
      <Layout />

      <GlobalStyles />
    </Provider>
  )
}

export default App;
