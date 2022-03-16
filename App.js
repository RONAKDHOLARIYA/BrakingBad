import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './App/Navigations/StackNavigation';
import {colors} from './App/Helpers/colors';
const App = ({params}) => (
  <SafeAreaView style={{flex: 1, backgroundColor: colors.secondary}}>
    <StatusBar backgroundColor={colors.secondary} barStyle="light-content" />
    <NavigationContainer
      theme={{
        colors: {
          card: colors.secondary,
        },
      }}>
      <StackNavigation />
    </NavigationContainer>
  </SafeAreaView>
);

export default App;
