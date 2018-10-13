import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.headerText}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 5,
    elevation: 4,
    position: 'relative',
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "#000",
    shadowOpacity: 0.2
  },
  textStyle: {
    fontSize: 20
  }
});

export { Header };
