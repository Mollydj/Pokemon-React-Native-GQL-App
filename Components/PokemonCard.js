import React, { useState } from 'react';
import styled from 'styled-components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useQuery } from '@apollo/client';
import { GET_POKEMON_BY_NAME } from '../GraphQl/queries';
import { Text, View, FlatList, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function PokemonCard(props) {
  const { pokemon } = props;
  const pokemonName = pokemon.name;
  const [pokemonDetails, setPokemonDetails] = useState();
  const { data, error, loading, refetch } = useQuery(GET_POKEMON_BY_NAME, {
    variables: { name: pokemonName },
    onCompleted: (data) => {
      setPokemonDetails(data.pokemon.type);
    },
  });

  const renderItem = ({ item }) => <Pokemon>{item.type.name}</Pokemon>;

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

  return (
    <>
    <TouchablePokemon>
      <Pokemon>{pokemon.name}</Pokemon>
      <PokeImage source={{ uri: pokemon.artwork }} />
      <Text>{data.pokemon.types.map((item) => item.name)}</Text>
      <FlatList
        data={data.pokemon.types}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
      />
      </TouchablePokemon>
    </>
  );
}

const TouchablePokemon = styled.TouchableOpacity`
width: ${wp('45%')}px;
height: ${wp('45%')}px;
justify-content: center;
align-content: center;
align-self: center;
`;


const Pokemon = styled.Text`
  justify-content: center;
  align-items: center;
  font-size: ${hp('2%')}px;
`;

const PokeImage = styled.Image`
  resize-mode: contain;
  flex: 1;
`;

const LoadingIndicatorContainer = styled.View`
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;
