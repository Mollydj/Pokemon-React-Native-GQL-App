import React, { useState } from 'react';
import { FlatList, LogBox, SafeAreaView } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_POKEMON_LIST } from '../GraphQl/queries';
import styled from 'styled-components/native';
import PokemonCard from './PokemonCard';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Icon } from 'react-native-eva-icons';
import Card from './Card';
import LoadingIndicator from './Helpers/LoadingIndicator';

export default function PokemonList(props) {
  const { navigation } = props;
  const [text, onChangeText] = useState('');
  const { data, error, loading, refetch } = useQuery(GET_POKEMON_LIST, {
    variables: { limit: 151, offset: 0 },
    // variables: { limit: 4, offset: 0 },
  });

  LogBox.ignoreLogs(['Warning: ...']);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    console.log('Refetching...');
    // refetch();
  }

  const getPrevPokemonId = (id, value) => {
    id - 1;
  };
  const getNextPokemonId = (id, value) => {
    id + 1;
  };

  const renderItem = ({ item }) => (
    
    <PokemonCard
      navigation={navigation}
      pokemon={item}
      key={item.id.toString()}
      pokemonName={item.name}
    />
  );

  return (
    <>
      <SafeAreaView style={{ backgroundColor: '#FFD12F' }} />
      <HeaderSection>
        <SearchContainer>
          <Icon name='search-outline' width={50} height={50} fill='#FF5C00' />
          <SearchInput
            onChangeText={onChangeText}
            value={text}
            placeholder={'Search for Pokemon'}
          />
          <Icon
            name='close-circle-outline'
            width={20}
            height={20}
            fill='#D0D0D0'
            onPress={() => onChangeText('')}
          />
        </SearchContainer>
        <CardContainer>
          <Card />
        </CardContainer>
      </HeaderSection>
      <PokemonSection>
        <Title>Original 150 Pokemon</Title>

        <FlatList
          scrollEnabled={true}
          data={data.pokemons.results.filter((item) =>
            item.name.includes(text.toLowerCase())
          )}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          overflow='hidden'
        />
      </PokemonSection>
    </>
  );
}

const SearchContainer = styled.View`
  background-color: #fffcf0;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 85%;
  height: ${wp('15%')}px;
  border-radius: ${wp('5%')}px;
  padding: ${wp('4%')}px;
`;

const CardContainer = styled.View`
  flex-direction: row;
  padding: ${wp('4%')}px;
  width: ${wp('100')}px;
`;

const SearchInput = styled.TextInput`
  flex: 1;
`;

const HeaderSection = styled.View`
  background-color: #ffd12f;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding: ${wp('4%')}px;
`;

const Title = styled.Text`
  color: #606060;
  /* flex-direction: column; */
  padding: 20px;
  font-size: ${wp('8')}px;
`;

const PokemonSection = styled.View`
  background-color: #fae392;
  padding: ${wp('2')}px;
  border-radius: ${hp('4%')}px;
  /* overflow: scroll; */
  /* margin-bottom: ${wp('1%')}px; */
  top: ${hp('-4%')}px;
  margin-bottom: ${hp('-4%')}px;
  /* position: absolute; */
  flex: 3;
  /* width: 100%; */
  /* justify-content: center; */
  /* align-self: center; */
  /* align-items: center; */
`;
