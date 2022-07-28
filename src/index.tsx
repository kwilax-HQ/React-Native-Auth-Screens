import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import type {NavigationContainerProps} from '@react-navigation/native';

export const Txt = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Auth Component</Text>
    </View>
  );
};
export default () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Auth Component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    width: '80%',
  },
});
