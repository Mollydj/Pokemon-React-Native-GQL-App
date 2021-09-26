import React from 'react';
import styled from 'styled-components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import PokeImage from '../../GraphQl/GetPokemonImage';

export default function Species(props) {

  // const renderItem = ({ item }) => (
  //   <PokemonCard
  //     navigation={navigation}
  //     pokemon={item}
  //     pokemonId={item.id.toString()}
  //     pokemonName={item.name}
  //   />
  // );

  const { data } = props;
  // console.log('Species', data.pokemon_v2_pokemonspecies);
  return (
    <>

      <FlatList
        scrollEnabled={true}
        data={data}
        // keyExtractor={({ item }) => item.id}
        renderItem={({ item }) => (
          <>
            <TouchablePokemon>
            <PokeImage pokemonId={item.id} />
              <Text>
                {item.id} {item.name}
              </Text>
            </TouchablePokemon>
          </>
        )}
        overflow='hidden'
        scrollEnabled={false}
      />
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

const CurrentEvolution = styled.Text`
  background-color: #ffffff;
  color: ${(props) => props.color};
`;
