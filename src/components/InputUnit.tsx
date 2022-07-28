import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Lock, Eye, EyeOff} from 'react-native-feather';
import type {InputFieldType} from '../componentTypes';

const themeColor = '#4267B2';

export const InputUnit = ({
  inputValue,
  keyboardType = "default",
  label,
  leftIcon,
  placeholder,
}: InputFieldType) => {
  return (
    <View style={styles.inputUnit}>
      <Text style={styles.inputLabel}>{label || inputValue}</Text>
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

interface IPassword {
  inputValue?: string;
  showForgetPasswordLink?: boolean;
  showPassword?: boolean;
  toggleShowPassord?: () => void;
}
export const PaswordInputUnit = ({
  inputValue,
  showPassword,
  showForgetPasswordLink,
  toggleShowPassord,
}: IPassword) => {
  return (
    <View style={styles.inputUnit}>
      <Text style={styles.inputLabel}>Password</Text>
      <View style={styles.inputArea}>
        <Lock />
        <TextInput
          value={inputValue}
          style={styles.textInput}
          placeholder={'password'}
          placeholderTextColor="#666666"
          autoCapitalize="none"
          onChangeText={val => console.log(val)}
          onEndEditing={e => console.log(e.nativeEvent.text)}
        />
        <TouchableOpacity onPress={toggleShowPassord}>
          {showPassword ? <Eye /> : <EyeOff />}
        </TouchableOpacity>
      </View>
      {showForgetPasswordLink ? (
        <TouchableOpacity
          style={styles.forgetPasswordTouch}
          onPress={() => console.log('forget password')}>
          <Text style={styles.forgetPassword}>forget password?</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  inputUnit: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  inputArea: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
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
  forgetPasswordTouch: {
    marginTop: 8,
  },
  forgetPassword: {
    color: themeColor,
    textAlign: 'right',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
});
