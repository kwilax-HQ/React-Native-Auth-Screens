import React, {useState} from 'react';
import {Mail} from 'react-native-feather';
import ScreenLayout from '../components/ScreenLayout';
import {InputUnit, PaswordInputUnit} from '../components/InputUnit';
import {Button} from '../components/Button';
import {ScreenNavText} from '../components/ScreenNavText';
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
        showForgetPasswordLink
        toggleShowPassord={() => setShowPassword(!showPassword)}
      />
      <Button text="Login" handler={() => console.log('login')} />
      <ScreenNavText text="Don't have An Account? Sign Up" />
    </ScreenLayout>
  );
};

export default Login;
