import React from 'react';
import styled from 'styled-components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { ActivityIndicator, FlatList, Text } from 'react-native';

export default function Stats(props) {
  const { data } = props;
  return (
    <>
        <FlatList
          scrollEnabled={true}
          data={data}
          renderItem={({ item }) => (
            <>
              <Text key={item.pokemon_v2_stat.id}>
                {item.pokemon_v2_stat.name}: {item.base_stat}
              </Text>
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

// const PokeImage = styled.Image`
//   resize-mode: contain;
//   width: 100%;
//   height: 100%;
//   flex: 1;
//   margin: ${wp('1%')}px;
// `;

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
