import React, { useState } from 'react';
import styled from 'styled-components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useQuery } from '@apollo/client';
import { GET_EVOLUTION_DETAILS, GET_POKEMON_BY_NAME } from '../GraphQl/queries';
import { FlatList, ActivityIndicator, LogBox, Text } from 'react-native';
import { getTypeEmoji } from './Helpers/EmojiHelper';
import { getBackgroundColor } from './Helpers/BackgroundColorHelper';
import LoadingIndicator from './Helpers/LoadingIndicator';

export default function PokemonEvolution(props) {
  const { pokemonBackgroundColor, id } = props;
  // const { data, error, loading } = useQuery(GET_EVOLUTION_DETAILS, {
  //   variables: { id: id.toString() },
  // });
  
  // if (loading) {
  //   return <LoadingIndicator />;
  // }

  // if (error) {
  //   console.log('Refetching...', error);
  //   // refetch();
  // }

  return (
    <>
        <EvolutionChain><Text>Hellos</Text></EvolutionChain>
    </>
  );
}

const EvolutionChain = styled.View`
  margin: ${hp('1%')}px;
`;
