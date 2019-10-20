import { AppRegistry } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import Root from './Root';
import { name as appName } from '../../../app.json';

AppRegistry.registerComponent(appName, () => Root);
TrackPlayer.registerPlaybackService(() => require('./service'));
