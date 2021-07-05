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
import { getTypeEmoji } from './Helpers/EmojiHelper';

export default function PokemonCard(props) {
  const { pokemon } = props;

  return (
    <>
      <Container color={pokemonBackgroundColor} key={pokemon.id}>
<Text>Details</Text>
      </Container>
    </>
  );
}

const Container = styled.View`
  background-color: ${(props) => props.color};
  flex: 1;
`;
