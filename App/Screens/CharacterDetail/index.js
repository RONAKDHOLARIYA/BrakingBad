import React from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  ScrollView,
  FlatList,
} from 'react-native';
import Header from '../../Components/Header';
import OccupationListComp from '../../Components/OccupationListComp';
import {colors} from '../../Helpers/colors';
import {styles} from './style';
//Character Details Screen
const CharacterDetails = ({
  navigation: {pop},
  route: {
    params: {details},
  },
}) => (
  <View style={styles.container}>
    <Header
      title="Character Details"
      showBackButton
      onBackPress={() => {
        pop(); // use for go back
      }}
    />
    {/*====Image Container====*/}
    <ImageBackground
      blurRadius={20}
      source={{uri: details.img}}
      style={{
        width: Dimensions.get('screen').width,
        height: Dimensions.get('window').height / 2,
        position: 'absolute',
        zIndex: -100,
        top: 50,
      }}>
      <Image
        source={{uri: details.img}}
        style={{
          width: Dimensions.get('screen').width,
          height: Dimensions.get('window').height / 2,
        }}
        resizeMode="contain"
      />
    </ImageBackground>
    {/*========*/}
    {/*====Name Container====*/}
    <View style={styles.nameContainer}>
      <View style={{borderRadiusL: 8, overflow: 'hidden'}}></View>
      <Text style={{color: colors.secondary, fontSize: 22, fontWeight: '700'}}>
        {details.name}
      </Text>
      <Text
        style={{
          color: colors.secondary,
          fontSize: 16,
          fontWeight: '600',
          marginTop: 2,
        }}>
        {details.nickname}
      </Text>
    </View>
    {/*========*/}
    {/** Details Container */}
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
      }}>
      <View>
        <Text style={styles.heading}>Occupation</Text>
        <FlatList
          data={details.occupation}
          keyExtractor={(_, i) => i.toString()}
          style={{marginTop: 8}}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return <OccupationListComp item={item} />;
          }}
        />
      </View>
      <View style={{alignItems: 'flex-start'}}>
        <Text style={styles.heading}>Status</Text>
        <View style={styles.tag}>
          <Text
            style={{fontSize: 15, color: colors.lightGreen, fontWeight: '700'}}>
            {details.status}
          </Text>
        </View>
      </View>
      <View style={{alignItems: 'flex-start'}}>
        <Text style={styles.heading}>Season Appearance</Text>
        <View style={styles.tag}>
          <Text
            style={{fontSize: 15, color: colors.lightGreen, fontWeight: '700'}}>
            {details.appearance.toString().replace(/,/g, ', ')}
          </Text>
        </View>
      </View>
    </ScrollView>
    {/*========*/}
  </View>
);

export default CharacterDetails;
