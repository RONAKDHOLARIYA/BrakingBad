import React from 'react';
import {Text, TouchableOpacity, Image, Dimensions, View} from 'react-native';
import {colors} from '../Helpers/colors';
//List Component for Character List
const CharacterListComp = ({item, onPress = () => {}}) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.9}
    style={{
      backgroundColor: 'rgba(0,0,0,.3)',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
      marginBottom: 10,
      borderRadius: 8,
      alignItems: 'center',
      overflow: 'hidden',
    }}>
    <Image
      source={{uri: item.img}}
      style={{height: 200, width: Dimensions.get('window').width / 2 - 30}}
      resizeMode="cover"
    />

    <View
      style={{
        bottom: 0,
        alignItems: 'center',
        width: '100%',

        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,.3)',
        paddingVertical: 10,
      }}>
      <Text
        style={{
          color: colors.lightGreen,
          fontSize: 18,
          fontWeight: '700',
        }}>
        {item.name}
      </Text>
    </View>
  </TouchableOpacity>
);

export default CharacterListComp;
