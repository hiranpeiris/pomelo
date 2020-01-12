import React, { Component } from 'react';
import { Provider } from 'react-redux';
import PomeloApp from './src/PomeloApp';
import configureStore from './src/store';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PomeloApp />
      </Provider>
    );
  }
}

export default App;
