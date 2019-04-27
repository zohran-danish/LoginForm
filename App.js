import React from 'react';
import firebase from 'firebase';
import { StyleSheet, View } from 'react-native';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';


export default class App extends React.Component {
  componentDidMount() {
    // Initialize Firebase
    firebase.initializeApp({
      apiKey: 'AIzaSyARYcfduSuXy897PmgXn_VVOCJbT6rdt2M',
      authDomain: 'authentication-6d235.firebaseapp.com',
      databaseURL: 'https://authentication-6d235.firebaseio.com',
      projectId: 'authentication-6d235',
      storageBucket: 'authentication-6d235.appspot.com',
      messagingSenderId: '140099945930'
    });
  }

  render() {
    return (
      <View>
      <Header headerText="Authentication" />
      <LoginForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
