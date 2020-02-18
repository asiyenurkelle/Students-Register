import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';
import Main from './src/Main';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={{flex: 1}}>
        <Main />
      </View>
    );
  }
}
