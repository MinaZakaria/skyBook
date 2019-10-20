import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import TrackPlayer from 'react-native-track-player';
import styles from './style';
import images from '../../../assets/images';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World !!!</Text>
        <Text>Hello World !!!</Text>
        <Text>Hello World !!!</Text>
        <Text>Hello World !!!</Text>
        <Text>Hello World !!!</Text>
        <TouchableOpacity style={{ backgroundColor: 'green', width: 100, height: 100 }} onPress={this.onPress} />
      </View>
    );
  }

  onPress() {
    // Creates the player
    TrackPlayer.setupPlayer().then(async () => {

      // Adds a track to the queue
      await TrackPlayer.add({
        id: 'trackId',
        url: 'https://soundcloud.com/discover/sets/personalized-tracks:112979280:268121082', // Load media from the network
        title: 'Track Title',
        artist: 'Track Artist',
        artwork: images.album1
      });

      // Starts playing it
      TrackPlayer.play();

    });
  }
}

Home.propTypes = {
};

Home.defaultProps = {
};

export default Home;
