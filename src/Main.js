import React, {Component} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import firebase from '@firebase/app';
import '@firebase/auth';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';
//import {Button, Card, CardSection, Spinner} from './ortak';

class Main extends Component {
  UNSAFE_componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAmzxKlC7cW2erzbhrMqztkA6KyU-B5I1Y',
      authDomain: 'ogrencikayit-c8969.firebaseapp.com',
      databaseURL: 'https://ogrencikayit-c8969.firebaseio.com',
      projectId: 'ogrencikayit-c8969',
      storageBucket: 'ogrencikayit-c8969.appspot.com',
      messagingSenderId: '885415209796',
      appId: '1:885415209796:web:f999a23c94df32483e8511',
      measurementId: 'G-67D6Q0Y33M',
    });
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default Main;
