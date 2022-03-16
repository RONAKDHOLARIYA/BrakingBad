import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {colors} from '../Helpers/colors';
import {images} from '../Helpers/images';
//Header Component for Customize Header
const Header = ({
  title = '',
  showBackButton = false,
  onBackPress = () => {},
}) => (
  <View
    style={{
      height: 50,
      backgroundColor: colors.secondary,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
    }}>
    {showBackButton && (
      <TouchableOpacity
        onPress={onBackPress}
        activeOpacity={0.9}
        style={{
          height: 30,
          width: 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={images.backIcon}
          style={{height: 24, width: 24, tintColor: colors.lightGreen}}
          resizeMode="contain"
        />
      </TouchableOpacity>
    )}
    <Text
      style={{
        color: colors.lightGreen,
        fontWeight: '600',
        fontSize: 22,
        textTransform: 'capitalize',
        textAlign: 'center',
        width: '100%',
        position: 'absolute',
        zIndex: -10,
      }}>
      {title}
    </Text>
  </View>
);

export default Header;
