import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import List from './List';
import Inputs from './Inputs';
import ScrollView from './ScrollView'

export default function App(props) {

  return (
      <View>
        <ScrollView />
        <Inputs />
        <List />
        <View style={styles.container}>
            <Text onPress = {() => props.setStatus('Welcome to React Native by AnimalworldNG !!!')}>
                {props.status}
            </Text>
        <StatusBar style="auto" />
        </View>
        <View style={styles.redbox}>
            <Text onPress = {() => props.setStatus('Welcome to React Native by AnimalworldNG !!!')}>
                {props.status}
            </Text>
        <StatusBar style="auto" />
        </View>
        <View style={styles.bluebox}>
            <Text onPress = {() => props.setStatus('Welcome to React Native by AnimalworldNG !!!')}>
                {props.status}
            </Text>
        <StatusBar style="auto" />
        </View>
        <View style={styles.blackbox}>
            <Text onPress = {() => props.setStatus('Welcome to React Native by AnimalworldNG !!!')}>
                {props.status}
            </Text>
        <StatusBar style="auto" />
        </View>
      </View>
  );
  }

  const styles = StyleSheet.create ({
    container: {
       flexDirection: 'row',
       justifyContent: 'center',
       alignItems: 'center',
       borderRadius: 20,
       padding: 20,
       margin: 10,
       backgroundColor: 'gray',
    },
    redbox: {
       borderRadius: 20,
       padding: 20,
       margin: 10,
       backgroundColor: 'red',
       color: '#fff'
    },
    bluebox: {
       borderRadius: 20,
       padding: 20,
       margin: 10,
       backgroundColor: 'blue',
       color: '#fff'
    },
    blackbox: {
       borderRadius: 20,
       padding: 20,
       margin: 10,
       backgroundColor: 'black',
       color: '#fff'
    },
});