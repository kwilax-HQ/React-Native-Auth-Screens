import React from 'react';
import {Mail} from 'react-native-feather';
import ScreenLayout from '../components/ScreenLayout';
import InputUnit from '../components/InputUnit';
import type {InputFieldType} from '../componentTypes';

const loginDefaultFieds: InputFieldType[] = [
  {
    inputValue: 'email',
    label: 'Email',
    placeholder: 'johndoe@gmail.com',
    keyboardType: 'email-address',
    leftIcon: <Mail />,
  },
];

const Login = () => {
  const loginFields = loginDefaultFieds;
  return (
    <ScreenLayout screenHeader="Login">
      {loginFields.map((field, idx) => (
        <InputUnit {...field} key={idx} />
      ))}
    </ScreenLayout>
  );
};

export default Login;
