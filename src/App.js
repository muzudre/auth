import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

export default class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCNRou-mUZA3IhdLmxsE2vN4nuTJVspv9g",
      authDomain: "auth-c24b5.firebaseapp.com",
      databaseURL: "https://auth-c24b5.firebaseio.com",
      projectId: "auth-c24b5",
      storageBucket: "auth-c24b5.appspot.com",
      messagingSenderId: "585351438540"
    })

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  render() {
    return (
      <View >
        <Header headerText="Auth" />
        <LoginForm />
      </View>
    );
  }
}
