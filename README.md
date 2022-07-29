
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
# [@kwilax/react-native-auth-screens](https://github.com/kwilax-core/React-Native-Auth-Screens)

A Zero Dependency Authentication Screen UI for React Native & Expo Built on [@react-navigation](https://www.npmjs.com/package/@react-navigation/native)

### Getting Started
Before Installing this package, ensure your have properly installed  
- [React Navigation (NavigationContainer)](https://reactnavigation.org/docs/getting-started)  
- [React Navigation (native-stack)](https://reactnavigation.org/docs/native-stack-navigator/)  
- And any other Stack you may need.

### Installation
With NPM
```
npm i @kwilax/react-native-auth-screens
```
With Yarn
```
yarn add @kwilax/react-native-auth-screens
```

### Usage

The Component Should be accepts 3 props.  
- isAuthenticated:- The App Authentication state which would determine if the Authentication screen should be display or the protected screens.
- children:- React Navigation stack of you protected app screens.
- config: An Object to personalize the Auth Screen

```jsx
import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import RNAuthScreens from '@kwilax/react-native-auth-screens'
import AppStack from './appstack'
import config from './config'

const App = () => (
  const authState = true // App Derived Auth State
  return(
    <NavigationContainer>
        <RNAuthScreens isAuthenticated={authState} config={config}>
        <AppStack />
        </RNAuthScreens>
    </NavigationContainer>
  )
);

export default App

```

### Screens
React Native Auth Screen is a React Navigation Native Stack. You may navigate around the Screens via there names.
- Onboarding
- Login

### Config
Detailed list of the Config object entries
- OnboardingScreen: The default screen is the Login Screen. However you can provide a custom Onboarding Screen that would then display as default. From you Onboarding Screen, you can navigate to the Login and Other Screens using the screen names provides in the Screens Section above  

    ```jsx
    import MyOnboardingScreen from './myOnboardingScreen'
    
    const App = () => (
        // rest of the app
        <RNAuthScreens isAuthenticated={falsle} config={{OnboardingScreen: MyOnboardingScreen}}>
            <AppStack />
        </RNAuthScreens>
    );
    ```
- next

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!