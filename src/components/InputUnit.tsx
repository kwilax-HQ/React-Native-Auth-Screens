import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {ArrowUpCircle, User} from 'react-native-feather';
import type {InputFieldType} from '../componentTypes';

const themeColor = '#4267B2';

const InputUnit = ({
  inputValue,
  keyboardType,
  label,
  leftIcon,
  placeholder,
}: InputFieldType) => {
  return (
    <View style={styles.inputUnit}>
      <Text style={styles.inputLabel}>{label}</Text>
      <View style={styles.inputArea}>
        {leftIcon}
        <TextInput
          value={inputValue}
          style={styles.textInput}
          placeholder={placeholder || ''}
          keyboardType={keyboardType}
          placeholderTextColor="#666666"
          autoCapitalize="none"
          onChangeText={val => console.log(val)}
          onEndEditing={e => console.log(e.nativeEvent.text)}
        />
      </View>
    </View>
  );
};

export default InputUnit;

const styles = StyleSheet.create({
  inputUnit: {},
  inputLabel: {},
  inputArea: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    marginTop: 16,
    borderWidth: 1.5,
    paddingHorizontal: 8,
    borderColor: themeColor,
    borderRadius: 8,
  },
  textInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 8,
  },
});
