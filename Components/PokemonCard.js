import React from 'react';
import styled from 'styled-components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useQuery } from '@apollo/client';
import { GET_POKEMON_BY_NAME } from '../GraphQl/queries';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function PokemonCard(props) {
  const { pokemon } = props;
  const pokemonName = pokemon.name
  const { data, error, loading, refetch } = useQuery(GET_POKEMON_BY_NAME, {
    variables: { name: pokemonName},
  });


  return (
    <PokemonContainer>
      <Pokemon>{pokemon.name}</Pokemon>
      <PokeImage source={{ uri: pokemon.artwork }} />
      <Text>{data.pokemon.types.map(item => item.name)}</Text>
      <Icon name="pagelines" size={30} color="green" />
    </PokemonContainer>
  );
}

const PokemonContainer = styled.TouchableOpacity`
  background-color: aliceblue;
  width: ${wp('45%')}px;
  height: ${wp('45%')}px;
  margin: ${hp('1%')}px;
  border-radius: 10;
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
