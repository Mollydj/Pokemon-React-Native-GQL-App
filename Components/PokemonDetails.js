import React, { useState } from 'react';
import styled from 'styled-components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useQuery } from '@apollo/client';
import { GET_POKEMON_BY_NAME } from '../GraphQl/queries';
import { Text, View, FlatList, ActivityIndicator, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getTypeEmoji } from './Helpers/EmojiHelper';

export default function PokemonDetails(props) {
  const { pokemon, route } = props;

  console.log(route.params.pokemon);
  // if (!pokemon) {
  //   return (
  //     <LoadingIndicatorContainer>
  //       <ActivityIndicator size='large' color='#ff0000' />
  //     </LoadingIndicatorContainer>
  //   );
  // }

  return (
    <>
    <SafeAreaView />
    <HeaderSection></HeaderSection>
      <PokemonSection color={route.params.pokemonBackgroundColor}>
        <Text>Details</Text>
      </PokemonSection>
    </>
  );
}



const LoadingIndicatorContainer = styled.View`
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;

const Container = styled.View`
  flex: 1;
`;

const HeaderSection = styled.View`
  /* background-color: #ffd12f; */
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding: ${wp('4%')}px;
`;

const PokemonSection = styled.View`
  background-color: ${(props) => props.color};
  padding: ${wp('2')}px;
  border-radius: ${hp('4%')}px;
  top: ${hp('-4%')}px;
  margin-bottom: ${hp('-4%')}px;
  flex: 3;
`;