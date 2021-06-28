import React, { useState } from 'react';
import {
  Button,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
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
  console.log(data);

  if (loading) {
    return;
    <Container>
      <ActivityIndicator size='large' color='#ff0000' />
    </Container>;
  }

  // if (error) {
  //   refetch();
  // }

  return (
    <>
      <SafeAreaView />
      <ScrollView>
        <Container>
          {data.pokemons.results.map((item) => (
            <PokemonContainer>
              <Pokemon>{item.name}</Pokemon>
            </PokemonContainer>
          ))}
        </Container>
      </ScrollView>
    </>
  );
}

const Container = styled.View`
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
`;

const PokemonContainer = styled.TouchableOpacity`
  background-color: aliceblue;
  width: ${wp('45%')}px;
  margin: ${hp('1%')}px;
  border-radius: 10;
`;

const Pokemon = styled.Text`
  justify-content: center;
  align-items: center;

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
