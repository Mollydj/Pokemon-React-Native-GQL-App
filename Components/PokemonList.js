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
} from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_POKEMON_LIST } from '../GraphQl/queries';
import styled from 'styled-components/native';
import PokemonCard from './PokemonCard';

export default function PokemonList({ navigation }) {
  const [pokemonData, setPokemonData] = useState();
  const { data, error, loading, refetch } = useQuery(GET_POKEMON_LIST, {
    variables: { limit: 4, offset: 0 },
    onCompleted: (data) => {
      setPokemonData(data);
    },
  });

  if (loading || error) {
    return(
    <LoadingIndicatorContainer>
      <ActivityIndicator size='large' color='#ff0000' />
    </LoadingIndicatorContainer>);
  }

  if (error) {
    console.log('Refetching...');
    refetch();
  }


  const renderItem = ({ item }) => (
    console.log('item'. item),
    <PokemonCard pokemon={item} />
  );

  return (
    <>
      <SafeAreaView />
      <ScrollView>
        <Container>
          <FlatList
            data={data.pokemons.results}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </Container>
      </ScrollView>
    </>
  );
}

const LoadingIndicatorContainer = styled.View`
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;
const Container = styled.View`
  /* justify-content: flex-start; */
  /* flex-direction: row; */
  /* align-items: center; */
  /* flex-direction: row; */
  /* flex-wrap: wrap; */
`;