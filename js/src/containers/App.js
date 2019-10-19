import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';
import NavigationService from '../utils/NavigationService';
import Main from './Main';

export const AppNavigator = createSwitchNavigator(
  {
    Main: {
      screen: Main
    }
  }, {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);

class AppComponent extends Component {
  render() {
    return (
      <View>
        <AppNavigator
          key='appNavigator'
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }} />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1
  }
});

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent);

export default App;
