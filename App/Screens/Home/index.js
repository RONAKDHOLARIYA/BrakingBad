import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import Header from '../../Components/Header';
import {GET} from '../../Helpers/api';
import CharacterListComp from '../../Components/CharacterListComp';
import {colors} from '../../Helpers/colors';
//Character List Screen
const Home = ({navigation: {push}}) => {
  let [data, setData] = useState([{}, {}, {}, {}, {}, {}, {}, {}]);
  useEffect(() => {
    getCharactersData();
  }, []);
  // get characters data from api.
  let getCharactersData = () => {
    GET('characters')
      .then(data => {
        console.log(data, 'this is data'); //success block
        setData(data);
      })
      .catch(err => {
        console.log(err, 'this is error'); //error block
      });
  };
  return (
    <FlatList
      ListHeaderComponent={<Header title="Characters" />}
      stickyHeaderIndices={[0]} //stick the header component.
      bounces={false}
      data={data}
      keyExtractor={(_, i) => i.toString()}
      disableVirtualization
      maxToRenderPerBatch={10}
      numColumns={2}
      columnWrapperStyle={{
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 15,
        backgroundColor: colors.secondary,
      }}
      //render item for render list element or list component
      renderItem={({index, item}) => {
        return (
          <CharacterListComp
            item={item}
            key={index}
            onPress={() => {
              //use for navigate to other screen
              push('CharacterDetail', {
                details: item,
              });
            }}
          />
        );
      }}
    />
  );
};

export default Home;
