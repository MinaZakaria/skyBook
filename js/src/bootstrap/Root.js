import { Provider } from 'react-redux';
import React, { Component } from 'react';
import { View, StatusBar, KeyboardAvoidingView, Dimensions } from 'react-native';

import store from './store';
import Main from '../containers/Main';

/**
 * Root component
 */
export default class Root extends Component {
  render() {
    return (
      <KeyboardAvoidingView>
        <View style={{ height: Dimensions.get('window').height }}>
          <StatusBar hidden />
          <Provider store={store} >
            <Main />
          </Provider>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
