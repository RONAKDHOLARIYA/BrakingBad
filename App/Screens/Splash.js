import React, {useEffect} from 'react';
import {Text, View, Image} from 'react-native';
import {colors} from '../Helpers/colors';
import {images} from '../Helpers/images';

const Splash = ({navigation: {replace}}) => {
  useEffect(() => {
    setTimeout(() => {
      replace('Home');
    }, 2000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.black,
      }}>
      <Image source={images.splashBanner} />
    </View>
  );
};

export default Splash;
