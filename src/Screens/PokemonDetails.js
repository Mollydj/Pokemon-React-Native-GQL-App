import React, { useState } from 'react';
import styled from 'styled-components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Text, FlatList, SafeAreaView } from 'react-native';
import { Icon } from 'react-native-eva-icons';
import NavigationHeader from '../Components/NavigationHeader';
import PokeImage from '../../GraphQl/GetPokemonImage';
import About from '../Components/About';
import Stats from '../Components/Stats';
import Species from '../Components/Species';
import Abilities from '../Components/Abilities';

export default function PokemonDetails(props) {
  const { route, navigation } = props;
  const { pokemon, pokemonBackgroundColor, characteristics } =
    route.params;
  const [isAboutActive, setAboutActive] = useState(true);
  const [isStatsActive, setStatsActive] = useState(false);
  const [isSpeciesActive, setSpeciesActive] = useState(false);
  const [isAbilitiesActive, setAbilitiesActive] = useState(false);

  const handleToggle = (activeToggle, setToggle1, setToggle2, setToggle3) => {
    activeToggle(true);
    setToggle1(false);
    setToggle2(false);
    setToggle3(false);
  };

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
        <InfoToggleContainer>
          <InfoToggle
            onPress={() =>
              handleToggle(
                setAboutActive,
                setStatsActive,
                setSpeciesActive,
                setAbilitiesActive
              )
            }
          >
            <InfoToggleText>About</InfoToggleText>
          </InfoToggle>
          <InfoToggle
            onPress={() =>
              handleToggle(
                setStatsActive,
                setAboutActive,
                setSpeciesActive,
                setAbilitiesActive
              )
            }
          >
            <InfoToggleText>Stats</InfoToggleText>
          </InfoToggle>
          <InfoToggle
            onPress={() =>
              handleToggle(
                setSpeciesActive,
                setAboutActive,
                setStatsActive,
                setAbilitiesActive
              )
            }
          >
            <InfoToggleText>Species</InfoToggleText>
          </InfoToggle>
          <InfoToggle
            onPress={() =>
              handleToggle(
                setAbilitiesActive,
                setAboutActive,
                setStatsActive,
                setSpeciesActive,
              )
            }
          >
            <InfoToggleText>Abilities</InfoToggleText>
          </InfoToggle>
        </InfoToggleContainer>

        {isAboutActive && <About data={pokemon} characteristics={characteristics} />}
        {isStatsActive && <Stats data={pokemon.pokemon_v2_pokemonstats} />}
        {isSpeciesActive && (
          <Species
            data={pokemon.pokemon_v2_pokemonspecy.pokemon_v2_evolutionchain}
          />
        )}
        {isAbilitiesActive && (
          <Abilities data={pokemon.pokemon_v2_pokemonabilities} />
        )}
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

const InfoToggleContainer = styled.View`
  flex-direction: row;
  background-color: steelblue;
  justify-content: space-around;
  padding: ${wp('4%')}px;
  margin-bottom: ${wp('4%')}px;
`;

const InfoToggle = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: tomato;
  flex: 1;
`;

const InfoToggleText = styled.Text`
  text-transform: uppercase;
  font-size: ${wp('4%')}px;
  text-decoration: underline;
  text-decoration-color: #ffffff;
  font-weight: bold;
  color: #ffffff;
`;
