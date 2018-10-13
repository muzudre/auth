import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

export default class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      // firebase conf
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
