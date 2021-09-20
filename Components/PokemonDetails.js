import React, { useState } from 'react';
import styled from 'styled-components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useQuery } from '@apollo/client';
import { GET_POKEMON_BY_NAME } from '../GraphQl/queries';
import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import { Icon } from 'react-native-eva-icons';
import { getTypeEmoji } from './Helpers/EmojiHelper';
import NavigationHeader from './NavigationHeader';

export default function PokemonDetails(props) {
  const { route, navigation } = props;
  const { pokemon, pokemonBackgroundColor, artwork } = route.params;
  console.log(pokemon);

  return (
    <>
      <SafeAreaView />
      
      <NavigationHeader
        color={pokemonBackgroundColor}
        headerTitle={pokemon.name}
        leftButton={<Icon name='arrow-ios-back-outline' onPress={() => navigation.goBack()} width={50} height={50} fill={pokemonBackgroundColor} />}
        rightButton={<Icon name='star-outline' width={40} height={40} fill={pokemonBackgroundColor} />}
      />
      <PokeImageContainer>
        <PokeImage source={{ uri: artwork }} />
      </PokeImageContainer>

      <PokemonSection color={pokemonBackgroundColor}>

      <AboutSection>
      <Text>Height: {pokemon.height}</Text>
      <Text>Weight: {pokemon.weight}</Text>
      <Text>Base Experience: {pokemon.base_experience}</Text>
      {/* <BannerContainer> */}
        <Banner><BannerText>{pokemon.order}</BannerText></Banner>
      {/* </BannerContainer> */}
      </AboutSection>
      {/* 
        MOVES
        <FlatList
          scrollEnabled={true}
          data={pokemon.moves}
          renderItem={({item}) => <Text>{item.move.name}</Text>}
        /> */}
      {/*
          STATS 
        <FlatList
          scrollEnabled={true}
          data={pokemon.stats}
          renderItem={({item}) => <Text>{item.stat.name} {item.base_stat}</Text>}
        /> */}
        
        <TypeContainer> 
           {pokemon.types.map((item) => (
              <Type activeOpacity={0.7}>
                <Text>
                  {item.type.name + ' ' + getTypeEmoji(item.type.name)}
                  </Text>
              </Type>
            ))}
           </TypeContainer>


           {/* <TypeContainer> 
        <FlatList
          scrollEnabled={true}
          data={pokemon.types}
          key={({item}) => item.type.slot}
          renderItem={({item}) =>
           <Type><Text>{getTypeEmoji(item.type.name)}</Text></Type>
          }
        />
                   </TypeContainer> */}
        

      </PokemonSection>
    </>
  );
}

const PokeImage = styled.Image`
  resize-mode: contain;
  width: 100%;
  height: 100%;
  flex: 1;
`;

const PokeImageContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding: ${wp('4%')}px;
  margin: ${wp('4%')}px;
`;

const PokemonSection = styled.View`
  background-color: ${(props) => props.color};
  padding-vertical: ${wp('2')}px;
  border-radius: ${wp('5%')}px;
  top: ${hp('-4%')}px;
  margin-bottom: ${hp('-4%')}px;
  flex: 3;
`;

const Banner = styled.View`
  align-items: center;
  margin-right: -3%;
  padding-horizontal: ${wp('6%')}px;
  padding-vertical: ${wp('3%')}px;
  border-top-left-radius: ${wp('5%')}px;
  border-bottom-left-radius: ${wp('5%')}px;
  background-color: rgba(255, 255, 255, 0.3);
`;

const BannerText = styled.Text`
  font-size: ${wp('5%')}px;
  font-weight: bold;
  color: #ffffff;
`;

const AboutSection = styled.View`
  margin-top: ${hp('1%')}px;
  padding-left: ${wp('4%')}px;
  /* background-color: tomato; */
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const TypeContainer = styled.View`
  /* background-color: steelblue; */
  justify-content: center;
  flex-direction: row;
`;

const Type = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
  background-color: rgba(255, 255, 255, 0.3);
  margin: ${wp('2%')}px;
  border-radius: ${wp('1%')}px;
`;