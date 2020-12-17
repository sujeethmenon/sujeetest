import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './src/reducers';
import thunk from 'redux-thunk';
import { StatusBar} from 'react-native';
import Home from './src/screens/home';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const store = createStore(reducers, applyMiddleware(thunk));
    return (
      <Provider store={store}>
        <StatusBar
          barStyle="light-content"
          translucent={true}
          backgroundColor="transparent"
        />
        <Home />
      </Provider>
    );
  }
}

export default App;
