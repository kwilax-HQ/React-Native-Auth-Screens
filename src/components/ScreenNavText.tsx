import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const themeColor = '#4267B2';

interface IPageSwitch {
  text?: string;
  handler?: () => void;
}
export const ScreenNavText = ({text, handler}: IPageSwitch) => {
  return (
    <TouchableOpacity style={styles.switch} onPress={handler}>
      <Text style={styles.switchText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  switch: {
    paddingVertical: 8,
  },
  switchText: {
    color: themeColor,
    textAlign: 'center',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
});
