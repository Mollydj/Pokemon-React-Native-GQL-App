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
} from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_POKEMON_LIST } from '../GraphQl/queries';
import styled from 'styled-components/native';
import PokemonCard from './PokemonCard';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default function PokemonList({ navigation }) {
  const [pokemonData, setPokemonData] = useState();
  const { data, error, loading, refetch } = useQuery(GET_POKEMON_LIST, {
    variables: { limit: 10, offset: 0 },
    onCompleted: (data) => {
      setPokemonData(data);
    },
  });

  if (loading || error) {
    return (
      <LoadingIndicatorContainer>
        <ActivityIndicator size='large' color='#ff0000' />
      </LoadingIndicatorContainer>
    );
  }

  if (error) {
    console.log('Refetching...');
    refetch();
  }

  const renderItem = ({ item }) => (
    <Container>
        <PokemonCard pokemon={item} />
    </Container>
  );

  return (
    <>
    <PokemonSection>
      <FlatList
        data={data.pokemons.results}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </PokemonSection>
    </>
  );
}

const LoadingIndicatorContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Container = styled.View`
  background-color: palegoldenrod;
  flex-direction: row;
  flex:1;
  margin: ${wp('1%')}px;
`;

const HeaderSection = styled.View`
  background-color:palevioletred;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

const PokemonSection = styled.View`
  background-color: rebeccapurple;
  flex-direction: row;
  flex:1;
`;
