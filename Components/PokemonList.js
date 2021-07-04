import React, { useState } from 'react';
import {
  Button,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_POKEMON_LIST } from '../GraphQl/queries';
import styled from 'styled-components/native';
import PokemonCard from './PokemonCard';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Icon } from 'react-native-eva-icons';

export default function PokemonList({ navigation }) {
  const [text, onChangeText] = useState('');
  const [pokemonData, setPokemonData] = useState();
  const { data, error, loading, refetch } = useQuery(GET_POKEMON_LIST, {
    variables: { limit: 50, offset: 0 },
    // onCompleted: ({data}) => {
    //   setPokemonData();
    // },
  });

  if (loading || error) {
    return (
      <LoadingIndicatorContainer>
        <ActivityIndicator size='large' color='#FF5C00' />
      </LoadingIndicatorContainer>
    );
  }

  if (error) {
    console.log('Refetching...');
    refetch();
  }

  console.log('data', data);

  const renderItem = ({ item }) => (
    <Container>
      <PokemonCard pokemon={item} key={item.id} />
    </Container>
  );

  return (
    <>
      <HeaderSection>
        
        <SearchContainer>
        <Icon name='search-outline' width={50} height={50} fill='#FF5C00' />
          <SearchInput
            onChangeText={onChangeText}
            value={text}
            placeholder={'Search for Pokemon'}
          ></SearchInput>
          <Icon name='close-circle-outline' width={20} height={20} fill='#FF5C00' onPress={() => onChangeText('')} />
          
        </SearchContainer>
      </HeaderSection>
      <PokemonSection>
        <Title>Original 50 Pokemon</Title>

        <FlatList
          scrollEnabled={true}
          data={data.pokemons.results.filter((item) =>
            item.name.includes(text.toLowerCase())
          )}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          overflow={'hidden'}
        />
      </PokemonSection>
    </>
  );
}

const SearchContainer = styled.View`
  background-color: #FFFCF0;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 85%;
  height: ${wp('15%')}px;
  border-radius: 10;
  padding: ${wp('4%')}px;
`;

const SearchInput = styled.TextInput`
  flex:1;
`;

const LoadingIndicatorContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Container = styled.View`
  background-color: #a3cb90;
  flex-direction: row;
  flex: 1;
  margin: ${wp('1%')}px;
  border-radius: 10;
  padding: ${wp('4%')}px;
  justify-content: center;
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
  flex: 5;
  /* width: 100%; */
  /* justify-content: center; */
  /* align-self: center; */
  /* align-items: center; */
`;
