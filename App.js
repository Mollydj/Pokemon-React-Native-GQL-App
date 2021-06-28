import React, { useState } from 'react';
import {
  Button,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { ApolloProvider, useQuery, gql } from '@apollo/client';
import { Picker } from '@react-native-picker/picker';
import { apolloClient } from './apollo';
import { GET_POKEMON_BY_NAME } from './GraphQl/queries';
import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

function RootComponent() {
  const [pokemonData, setPokemonData] = useState();
  const { data, error, loading, refetch } = useQuery(GET_POKEMON_BY_NAME, {
    variables: { limit: 10, offset: 1 },
    onCompleted: (data) => {
      setPokemonData(data);
    },
  });

  if (loading) {
    return;
    <Container>
      <ActivityIndicator size='large' color='#ff0000' />
    </Container>;
  }

  if (error) {
    refetch();
  }

  return (
    <Container>
      <SafeAreaView />
      {data.pokemons.results.map((item) => (
        <Pokemon>{item.name}</Pokemon>
      ))}
    </Container>
  );
}

const Container = styled.View`
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;

const Pokemon = styled.Text`
  background-color: aliceblue;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: ${hp('1%')}px;
  font-size: ${hp('2%')}px;
  padding: ${hp('2%')}px;
`;

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <RootComponent />
    </ApolloProvider>
  );
}
