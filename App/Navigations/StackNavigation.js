import React from 'react';
import {Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, CharacterDetail, Splash} from '../Screens';
const Stack = createNativeStackNavigator();
// stack navigator logic
const StackNavigation = ({params}) => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Splash" component={Splash} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="CharacterDetail" component={CharacterDetail} />
  </Stack.Navigator>
);

export default StackNavigation;
