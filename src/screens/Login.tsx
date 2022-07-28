import React, {useState} from 'react';
import {Mail} from 'react-native-feather';
import ScreenLayout from '../components/ScreenLayout';
import {InputUnit, PaswordInputUnit} from '../components/InputUnit';
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
  const [showPassword, setShowPassword] = useState(false);
  const loginFields = loginDefaultFieds;

  return (
    <ScreenLayout screenHeader="Login">
      {loginFields.map((field, idx) => (
        <InputUnit {...field} key={idx} />
      ))}
      <PaswordInputUnit
        inputValue="hg"
        showPassword={showPassword}
        toggleShowPassord={() => setShowPassword(!showPassword)}
      />
    </ScreenLayout>
  );
};

export default Login;
