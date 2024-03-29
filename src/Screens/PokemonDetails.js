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
  const { pokemon, pokemonBackgroundColor, characteristics } = route.params;
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

      <Container>
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
                setSpeciesActive
              )
            }
          >
            <InfoToggleText>Abilities</InfoToggleText>
          </InfoToggle>
        </InfoToggleContainer>

        {isAboutActive && (
          <About data={pokemon} characteristics={characteristics} />
        )}
        {isStatsActive && <Stats data={pokemon.pokemon_v2_pokemonstats} />}
        {isSpeciesActive && (
          <Species
            pokemonId={pokemon.id}
            data={
              pokemon.pokemon_v2_pokemonspecy.pokemon_v2_evolutionchain
                .pokemon_v2_pokemonspecies
            }
          />
        )}
        {isAbilitiesActive && (
          <Abilities data={pokemon.pokemon_v2_pokemonabilities} />
        )}
      </PokemonSection>
      </Container>
    </>
  );
}

const HeaderSection = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;

const PokemonSection = styled.View`
  background-color: ${(props) => props.color};
  padding: ${wp('2')}px;
  border-radius: ${wp('5%')}px;
  margin-bottom: ${hp('-4%')}px;
  flex: 5;
`;

const InfoToggleContainer = styled.View`
  flex-direction: row;
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

const Container = styled.View`
  flex:1;
`;
