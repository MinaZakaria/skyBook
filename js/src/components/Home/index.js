import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World !!!</Text>
        <Text>Hello World !!!</Text>
        <Text>Hello World !!!</Text>
        <Text>Hello World !!!</Text>
        <Text>Hello World !!!</Text>
      </View>
    );
  }
}

Home.propTypes = {
};

Home.defaultProps = {
};

export default Home;
