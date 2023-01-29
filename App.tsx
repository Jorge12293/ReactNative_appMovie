import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './src/components/MainNavigation';



const App = () =>{
  return  (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;

// Clean Cache
//npx react-native start --reset-cache