import React from 'react';
import { StyleSheet, View } from 'react-native';

import Profile from './Profile/Profile';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Profile />
      </View>
    );
  }
}
