import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

const themeColor = '#4267B2';

interface IButton {
  text?: string;
  handler?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}
export const Button = ({text, handler, disabled, isLoading}: IButton) => {
  const buttonHandler = () => {
    if (disabled || isLoading || !handler) {
      return;
    }
    handler();
  };
  return (
    <TouchableOpacity style={styles.button} onPress={buttonHandler}>
      {isLoading ? (
        <ActivityIndicator color="#ffffff" />
      ) : (
        <Text style={styles.buttonText}>{text || ''}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 60,
    width: '100%',
    backgroundColor: themeColor,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
});
