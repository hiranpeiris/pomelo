import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class PomeloApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Pomelo App</Text>
      </View>
    );
  }
}

export default PomeloApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
