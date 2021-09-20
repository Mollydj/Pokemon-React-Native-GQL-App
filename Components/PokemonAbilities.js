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

export default function PokemonAbilities(props) {
  const { pokemonBackgroundColor, id, data } = props;
  //TO DO: ADD ABILITIES DETAILS MODAL HERE

  return (
    <>
      <FlatList
        scrollEnabled={true}
        data={data}
        key={({ index }) => index}
        renderItem={({ item }) => (
          console.log(item),
          <Abilities>
            <Text>{item.ability.name}</Text>
          </Abilities>
        )}
      />
    </>
  );
}

const Abilities = styled.View`
  margin: ${hp('1%')}px;
`;
