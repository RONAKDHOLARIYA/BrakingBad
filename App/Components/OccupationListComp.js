import React from 'react';
import {Text, View} from 'react-native';
import {colors} from '../Helpers/colors';
//Occupation List Component
const OccupationListComp = ({item}) => (
  <View
    style={{
      backgroundColor: 'rgba(0,0,0,0.2)',
      paddingVertical: 5,
      paddingHorizontal: 10,
      marginRight: 10,
      borderRadius: 8,
    }}>
    <Text style={{fontSize: 15, color: colors.lightGreen, fontWeight: '700'}}>
      {item}
    </Text>
  </View>
);

export default OccupationListComp;
