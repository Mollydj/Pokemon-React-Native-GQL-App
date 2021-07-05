import React, { useState } from 'react';
import styled from 'styled-components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useQuery } from '@apollo/client';
import { GET_POKEMON_BY_NAME } from '../GraphQl/queries';
import { FlatList, ActivityIndicator } from 'react-native';
import { getTypeEmoji } from './Helpers/EmojiHelper';

export default function PokemonCard(props) {
  const { pokemon } = props;
  const pokemonName = pokemon.name;
  const [pokemonDetails, setPokemonDetails] = useState();
  const [pokemonBackgroundColor, setBackgroundColor] = useState('#404040');
  const { data, error, loading, refetch } = useQuery(GET_POKEMON_BY_NAME, {
    variables: { name: pokemonName },
  });
  

  const getBackgroundColor = (type) => {
    if (type === 'electric') {
      setBackgroundColor('#DBAB00');
    } else if (type === 'grass') {
      setBackgroundColor('#B5D8A5');
    } else if (type === 'fire') {
      setBackgroundColor('#ff5c00');
    } else if (type === 'poison') {
      setBackgroundColor('#FFD12F');
    } else if (type === 'flying') {
      setBackgroundColor('#A476BA');
    } else if (type === 'bug') {
      setBackgroundColor('#B48282');
    } else if (type === 'water') {
      setBackgroundColor('#76AEBA');
    } else if (type === 'normal') {
      setBackgroundColor('#D8D8D8');
    } else if (type === 'ground') {
      setBackgroundColor('#7E5656');
    } else if (type === 'fairy') {
      setBackgroundColor('#E1A1CC');
    } else if (type === 'fighting') {
      setBackgroundColor('#C5003B');
    } else if (type === 'psychic') {
      setBackgroundColor('#8141C1');
    } else if (type === 'rock') {
      setBackgroundColor('#767676');
    } else if (type === 'steel') {
      setBackgroundColor('#A8A8A8');
    } else if (type === 'ice') {
      setBackgroundColor('#A1DDF6');
    } else if (type === 'ghost') {
      setBackgroundColor('#C5D3D9');
    } else if (type === 'dragon') {
      setBackgroundColor('#446C46');
    } else if (type === 'fairy') {
      setBackgroundColor('#BD9EFF');
    }
  };

  const renderItem = ({ item, index }) => (
    getBackgroundColor(data.pokemon.types[0].type.name),
    (
      <TypeContainer activeOpacity={0.7}>
        <Pokemon BackgroundColor={pokemonBackgroundColor}>
          {item.type.name + ' ' + getTypeEmoji(item.type.name)}
        </Pokemon>
      </TypeContainer>
    )
  );

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
      <Container color={pokemonBackgroundColor} listKey={pokemon.id}>
        <TouchablePokemon>
          <Pokemon>{pokemon.name}</Pokemon>
          <PokeImage source={{ uri: pokemon.artwork }} />
          <FlatList
            data={data.pokemon.types}
            renderItem={renderItem}
            keyExtractor={(item, index) => index + 1}
            numColumns={2}
          />

        </TouchablePokemon>
      </Container>
    </>
  );
}

const TouchablePokemon = styled.TouchableOpacity`
  width: ${wp('35%')}px;
  height: ${wp('35%')}px;
  /* justify-content: center; */
  /* align-items: center; */
  flex: 1;
`;

const TypeContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  /* flex-wrap: nowrap; */
  /* width: 100%; */
  flex:1;
  /* background-color: white; */
  background-Color: rgba(255, 255, 255, 0.5);
  margin: ${wp('1%')}px;
  border-radius: ${wp('1%')}px;
`;

const Pokemon = styled.Text`
  font-size: ${hp('1.5%')}px;
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
  border-radius: 10;
  padding: ${wp('1%')}px;
  justify-content: center;
  align-items: center;
`;
