import React, {useState} from 'react';
import {Mail, User} from 'react-native-feather';
import ScreenLayout from '../components/ScreenLayout';
import {InputUnit, PaswordInputUnit} from '../components/InputUnit';
import {Button} from '../components/Button';
import {ScreenNavText} from '../components/ScreenNavText';
import type {InputFieldType} from '../componentTypes';

const signupDefaultFieds: InputFieldType[] = [
  {
    inputValue: 'email',
    label: 'Email',
    placeholder: 'johndoe@gmail.com',
    keyboardType: 'email-address',
    leftIcon: <Mail />,
  },
  {
    inputValue: 'fullName',
    label: 'FullName',
    placeholder: 'John Doe',
    leftIcon: <User />,
  },
];

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const signupFields = signupDefaultFieds;

  return (
    <ScreenLayout screenHeader="Signup">
      {signupFields.map((field, idx) => (
        <InputUnit {...field} key={idx} />
      ))}
      <PaswordInputUnit
        inputValue="hg"
        showPassword={showPassword}
        toggleShowPassord={() => setShowPassword(!showPassword)}
      />
      <Button text="Sign Up" handler={() => console.log('login')} />
      <ScreenNavText text="Already Have an Account? Login" />
    </ScreenLayout>
  );
};

export default Signup;
