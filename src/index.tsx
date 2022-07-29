import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens
import Login from './screens/Login';
import Signup from './screens/Signup';

interface IAuthScreen {
  isAuthenticated?: boolean;
  children?: React.ReactNode;
  config?: {
    OnboardingScreen?: () => JSX.Element;
  };
}

const Stack = createNativeStackNavigator();

export default ({isAuthenticated, children, config}: IAuthScreen) => {
  const {OnboardingScreen} = config || {};
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!isAuthenticated ? (
        <>
          {OnboardingScreen ? (
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          ) : null}
          <Stack.Screen name="Login" component={Signup} />
          <Stack.Screen name="Signup" component={Login} />
        </>
      ) : (
        children
      )}
    </Stack.Navigator>
  );
};
