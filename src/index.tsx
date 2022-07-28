import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens
import LoginScreen from './screens/Login';
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
            <Stack.Screen
              name="OnboardingScreen"
              component={OnboardingScreen}
            />
          ) : null}
          <Stack.Screen name="Login" component={LoginScreen} />
        </>
      ) : (
        children
      )}
    </Stack.Navigator>
  );
};
