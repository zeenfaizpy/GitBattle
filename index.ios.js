/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TouchableHighlight,
} from 'react-native';

import Main from './app/components/main';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
  },
});

class GitBattle extends Component {
  render() {
    return (
        <NavigatorIOS
            style={styles.container}
            initialRoute={{ title: 'GitBattle', component: Main }}
        />
    );
  }
}




AppRegistry.registerComponent('GitBattle', () => GitBattle);
