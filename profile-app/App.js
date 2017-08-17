import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';

import Profile from './Profile/Profile';
import store from './store';

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
      <Provider store={store}>
        <View style={styles.container}>
          <Profile />
        </View>
      </Provider>
    );
  }
}
