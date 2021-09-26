import React from 'react';
import styled from 'styled-components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { ActivityIndicator, FlatList, Text } from 'react-native';

export default function About(props) {
  const { data, characteristics } = props;
  return (
    <>
      <Text>About</Text>
      <Text>#{data.order}</Text>
      <Text>{data.height} m</Text>
      <Text>{data.weight} Hectares</Text>
      <Text>{data.base_experience} Base Experience</Text>
      <Text>{'\n'}</Text>
      <FlatList
        scrollEnabled={true}
        data={characteristics}
        renderItem={({ item }) => (
          <>
          
            <CharacteristicsContainer>
              {item.pokemon_v2_characteristicdescriptions.map((item) => (
                <Text key={item.characteristic_id}>{item.description}</Text>
              ))}
            </CharacteristicsContainer>
          </>
        )}
        overflow='hidden'
        scrollEnabled={true}
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

const AboutContainer = styled.View`
  justify-content: center;
  align-items: center;
  background-color: steelblue;
`;

const CharacteristicsContainer = styled.View`
  justify-content: center;
  align-items: flex-start;
  background-color: tan;
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
