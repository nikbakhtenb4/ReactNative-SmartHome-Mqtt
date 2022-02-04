/* eslint-disable prettier/prettier */
import React, { Component } from "react";
// import RBSheet from "react-native-raw-bottom-sheet";

// import {View,Text} from 'react-native';
import {Provider} from 'react-redux';
//import store from './store';
import { createStore, applyMiddleware,compose } from 'redux';
// import thunk from 'redux-thunk';
import { store, persistor } from './src/Store.js';
import {PersistGate} from 'redux-persist/es/integration/react';
import RNBootSplash from 'react-native-bootsplash'
import AppNavigator from './src/component/Menu/AppNavigator';
//import { createAppContainer } from 'react-navigation';
//const AppContainer = createAppContainer(AppNavigator);
export default class App extends Component {
  componentDidMount(){setTimeout(() => {
    RNBootSplash.hide();
  }, 200);}

  render() {
    console.disableYellowBox = true;
    return (
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <AppNavigator/>
        </PersistGate>
      </Provider>
    
    );
  }
}