import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens
import LoginScreen from './screens/Login';
interface IAuthScreen {
  isAuthenticated?: boolean;
  children?: React.ReactNode;
}

const Stack = createNativeStackNavigator();

export default ({isAuthenticated, children}: IAuthScreen) => {
  return (
    <Stack.Navigator>
      {!isAuthenticated ? (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
        </>
      ) : (
        children
      )}
    </Stack.Navigator>
  );
};
