import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  state = {
    loggedIn: null
  }

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

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }

  }

  render() {
    return (
      <View >
        <Header headerText="Auth" />
        {this.renderContent()}
      </View>
    );
  }
}
