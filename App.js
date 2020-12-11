import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PresentationalState from './PresentationalState';

export default function App() {
  const [status, setStatus] = useState("Lorem ipsum dolor sit amet, consectetur adipisicing elit, used do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est la");

  return (
    <View style={styles.container}>
      <Text style={{alignSelf: 'center', fontWeight: 'bold', fontSize: 20}}>Welcome to my React Native App </Text>
      <PresentationalState status={status} setStatus={setStatus} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fee',
    padding: 30,
    alignItems: 'flex-end',
  },
});
