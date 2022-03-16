import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  SafeAreaView,
  Modal,
  ImageBackground,
  Dimensions,
  Text,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './App/Navigations/StackNavigation';
import {colors} from './App/Helpers/colors';
import {images} from './App/Helpers/images';
import NetInfo from '@react-native-community/netinfo';
const App = ({params}) => {
  let [showNoNetwork, setShowNoNetwork] = useState(false);
  useEffect(() => {
    // check netwok connection
    const unsubscribe = NetInfo.addEventListener(state => {
      setShowNoNetwork(!state.isConnected);
    });
    // Unsubscribe netwok method
    return () => unsubscribe();
  }, []);
  return (
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
      {showNoNetwork && (
        <Modal visible={showNoNetwork} animationType="slide">
          <ImageBackground
            source={images.poster}
            style={{
              width: Dimensions.get('screen').width,
              height: Dimensions.get('screen').height,
            }}>
            <Text
              style={{
                position: 'absolute',
                bottom: 150,
                color: colors.lightGreen,
                textAlign: 'center',
                width: '100%',
                fontSize: 22,
                fontWeight: '700',
                lineHeight: 40,
                backgroundColor: 'rgba(0,0,0,.3)',
              }}>
              Check Your Internet{`\n`}Connection.
            </Text>
          </ImageBackground>
        </Modal>
      )}
    </SafeAreaView>
  );
};

export default App;
