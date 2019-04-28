import firebase from 'firebase';
import React from 'react';
import { View } from 'react-native';
import { Button, Header, Spinner, CardSection } from './src/components/common';
import LoginForm from './src/components/LoginForm';


export default class App extends React.Component {
    state = { loggedIn: null };

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

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });    
  }
 
  renderContent() {
    switch (this.state.loggedIn) {
      case true: 
       return (<CardSection><Button onPress={() => firebase.auth().signOut()}>Log Out</Button></CardSection>);
      case false :
        return <LoginForm />;
      default :
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
      <Header headerText="Authentication" />
      {this.renderContent()}      
      </View>
    );
  }
}

