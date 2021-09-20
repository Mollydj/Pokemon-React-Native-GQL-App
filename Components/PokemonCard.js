import React, { useState } from 'react';
import styled from 'styled-components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useQuery } from '@apollo/client';
import { GET_POKEMON_BY_NAME } from '../GraphQl/queries';
import { FlatList, ActivityIndicator, LogBox } from 'react-native';
import { getTypeEmoji } from './Helpers/EmojiHelper';
import { getBackgroundColor } from './Helpers/BackgroundColorHelper';

export default function PokemonCard(props) {
  const { pokemon, navigation, pokemonName } = props;
  const [pokemonBackgroundColor, setBackgroundColor] = useState('#404040');
  const { data, error, loading } = useQuery(GET_POKEMON_BY_NAME, {
    variables: { name: pokemonName },
    onCompleted: () => {
      getBackgroundColor(data.pokemon.types[0].type.name, setBackgroundColor);
    },
  });

  if (loading) {
    return (
      <LoadingIndicatorContainer>
        <ActivityIndicator size='large' color='#ff0000' />
      </LoadingIndicatorContainer>
    );
  }

  if (error) {
    console.log('Refetching...', error);
    // refetch();
  }

  return (
    <>
      <Container color={pokemonBackgroundColor} listKey={pokemon.id}>
        <TouchablePokemon
          onPress={() =>
            navigation.navigate('PokemonDetails', {
              pokemon: data.pokemon,
              artwork: pokemon.artwork,
              pokemonBackgroundColor,
              navigation
            })
          }
        >
          <PokemonName>{pokemon.name}</PokemonName>
          <PokeImage source={{ uri: pokemon.artwork }} />
          <TypeContainer>
            {data.pokemon.types.map((item) => (
              <Type activeOpacity={0.7}>
                <Pokemon>
                  {item.type.name + ' ' + getTypeEmoji(item.type.name)}
                </Pokemon>
              </Type>
            ))}
          </TypeContainer>
        </TouchablePokemon>
      </Container>
    </>
  );
}

const TouchablePokemon = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: ${wp('35%')}px;
  height: ${wp('35%')}px;
  flex: 1;
`;

const TypeContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Type = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
  background-color: rgba(255, 255, 255, 0.5);
  margin: ${wp('1%')}px;
  border-radius: ${wp('1%')}px;
`;

const Pokemon = styled.Text`
  font-size: ${hp('1.5%')}px;
  text-transform: capitalize;
`;

const PokemonName = styled.Text`
  font-size: ${hp('2.5%')}px;
  text-transform: capitalize;
`;

const PokeImage = styled.Image`
  resize-mode: contain;
  width: 100%;
  height: 100%;
  flex: 1;
  margin: ${wp('1%')}px;
`;

const LoadingIndicatorContainer = styled.View`
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;

const Container = styled.View`
  background-color: ${(props) => props.color};
  flex-direction: row;
  flex: 1;
  margin: ${wp('1%')}px;
  border-radius: ${wp('5%')}px;
  padding: ${wp('1%')}px;
  justify-content: center;
  align-items: center;
`;
