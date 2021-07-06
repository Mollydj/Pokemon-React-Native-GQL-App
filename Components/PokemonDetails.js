import React, { useState } from 'react';
import styled from 'styled-components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useQuery } from '@apollo/client';
import { GET_POKEMON_BY_NAME } from '../GraphQl/queries';
import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import { Icon } from 'react-native-eva-icons';
import { getTypeEmoji } from './Helpers/EmojiHelper';
import NavigationHeader from './NavigationHeader';

export default function PokemonDetails(props) {
  const { route, navigation } = props;
  const { pokemon, pokemonBackgroundColor } = route.params;

  return (
    <>
      <SafeAreaView />
      
      <NavigationHeader
        color={pokemonBackgroundColor}
        headerTitle={pokemon.name}
        leftButton={<Icon name='arrow-left-outline' onPress={() => navigation.goBack()} width={50} height={50} fill={pokemonBackgroundColor} />}
        rightButton={<Icon name='heart-outline' width={40} height={40} fill={pokemonBackgroundColor} />}
      />
      <HeaderSection>
        <PokeImage source={{ uri: pokemon.artwork }} />
      </HeaderSection>
      <PokemonSection color={pokemonBackgroundColor}>

      </PokemonSection>
    </>
  );
}

const PokeImage = styled.Image`
  resize-mode: contain;
  width: 100%;
  height: 100%;
  flex: 1;
  margin: ${wp('1%')}px;
`;

const HeaderSection = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding: ${wp('4%')}px;
  margin: ${wp('4%')}px;
`;

const PokemonSection = styled.View`
  background-color: ${(props) => props.color};
  padding: ${wp('2')}px;
  border-radius: ${hp('4%')}px;
  top: ${hp('-4%')}px;
  margin-bottom: ${hp('-4%')}px;
  flex: 3;
`;
