import React from 'react';
import Home from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detail from './src/screens/Detail';

const Stack = createNativeStackNavigator();

const App = () =>{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={Home} />
        <Stack.Screen 
          name="Detail" 
          component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;

// Clean Cache
//npx react-native start --reset-cache