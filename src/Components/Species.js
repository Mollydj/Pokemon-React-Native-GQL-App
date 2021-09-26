import React, { useState } from 'react';
import styled from 'styled-components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import PokeImage from '../../GraphQl/GetPokemonImage';

export default function Species(props) {
  const { data, pokemonId } = props;
  const [isActivePokemon, setPokemonToActive] = useState(pokemonId);

  console.log(pokemonId);
  return (
    <>
    <TypeContainer>
      <FlatList
        scrollEnabled={true}
        
        data={data}
        renderItem={({ item }) => (
          <>
            <TouchablePokemon key={item.id} isActivePokemon={pokemonId === item.id}>
              <PokeImage pokemonId={item.id} />
              <Text>{item.name}</Text>
            </TouchablePokemon>
          </>
        )}
        overflow='hidden'
        scrollEnabled={true}
      />
      </TypeContainer>
    </>
  );
}

const TouchablePokemon = styled.View`
  background-color: ${(props) => props.isActivePokemon ? '#ffffff' : 'steelblue'};
  justify-content: center;
  align-items: center;
  /* flex: 1; */
  height: ${hp('20%')}px;
  margin: 2px;

`;

const TypeContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: tan;
  padding-bottom: ${hp('10%')}px;
  /* flex:1; */
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
