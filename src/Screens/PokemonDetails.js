import React from 'react';
import styled from 'styled-components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
  Text,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { Icon } from 'react-native-eva-icons';
import NavigationHeader from '../Components/NavigationHeader';
import PokeImage from '../../GraphQl/GetPokemonImage';

export default function PokemonDetails(props) {
  const { route, navigation } = props;
  const { pokemon, pokemonBackgroundColor, pokemonId, pokemonData } =
    route.params;

  return (
    <>
      <SafeAreaView />

      <NavigationHeader
        color={pokemonBackgroundColor}
        headerTitle={pokemon.name}
        leftButton={
          <Icon
            name='arrow-ios-back-outline'
            onPress={() => navigation.goBack()}
            width={50}
            height={50}
            fill={pokemonBackgroundColor}
          />
        }
        rightButton={
          <Icon
            name='star-outline'
            width={40}
            height={40}
            fill={pokemonBackgroundColor}
          />
        }
      />
      <HeaderSection>
        <PokeImage pokemonId={pokemon.id} />
      </HeaderSection>
      <PokemonSection color={pokemonBackgroundColor}>
        <InfoToggle>
          <Text>Hello</Text>
        </InfoToggle>
        <Text>BASIC INFO</Text>
        <Text>#{pokemon.order}</Text>
        <Text>{pokemon.height} m</Text>
        <Text>{pokemon.weight} Hectares</Text>
        <Text>{pokemon.base_experience} Base Experience</Text>
        <Text>{'\n'}</Text>

        <Text>STATS</Text>
        <FlatList
          scrollEnabled={true}
          data={pokemon.pokemon_v2_pokemonstats}
          renderItem={({ item }) => (
            <>
              <Text>
                {item.pokemon_v2_stat.name}: {item.base_stat}
              </Text>
            </>
          )}
          overflow='hidden'
          scrollEnabled={false}
        />

        <Text>SPECIES</Text>
        <FlatList
          scrollEnabled={true}
          data={
            pokemon.pokemon_v2_pokemonspecy.pokemon_v2_evolutionchain
              .pokemon_v2_pokemonspecies
          }
          renderItem={({ item }) => (
            <>
            {pokemon.id !== item.id ? <Text>{item.name}</Text> : <CurrentEvolution color={pokemonBackgroundColor}>{item.name}</CurrentEvolution>}</>
          )}
          overflow='hidden'
          scrollEnabled={false}
        />

        <Text>ABILITIES</Text>
        <FlatList
          scrollEnabled={true}
          data={pokemon.pokemon_v2_pokemonabilities}
          renderItem={({ item }) => (
            <>
              <Text>{item.pokemon_v2_ability.name}</Text>
              <Text>
                {item.pokemon_v2_ability.pokemon_v2_abilityeffecttexts.map(
                  (item) => (item.language_id === 9 ? item.short_effect : null)
                )}
              </Text>
              <Text>{'\n'}</Text>
            </>
          )}
          overflow='hidden'
          scrollEnabled={false}
        />
      </PokemonSection>
    </>
  );
}

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
  border-radius: ${wp('5%')}px;
  top: ${hp('-4%')}px;
  margin-bottom: ${hp('-4%')}px;
  flex: 3;
`;

const InfoToggle = styled.View`
  background-color: steelblue;
  flex-direction: row;
`;

const CurrentEvolution = styled.Text`
  background-color: #ffffff;
  color: ${(props) => props.color};
`;
