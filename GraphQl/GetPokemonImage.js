import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components/native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen';

export default function PokeImage({pokemonID}) {
  const [pokemon, setPokemon] = useState({});
  useEffect(() => {
    (async () => {
      const result = await axios.get(
        `http://pokeapi.co/api/v2/pokemon/${pokemonID}`
      );
      setPokemon(result.data.sprites.other.['official-artwork'].front_default);
    })();
  }, [pokemonID]);

  if (!pokemon) {
    return (
      <LoadingIndicatorContainer>
        <ActivityIndicator size='large' color='#ff0000' />
      </LoadingIndicatorContainer>
    );
  }

  return (
    <Image source={{ uri: pokemon.toString() }} />
    
    );
};

const Image = styled.Image`
  resize-mode: contain;
  width: 100%;
  height: 100%;
  flex: 1;
  margin: ${wp('1%')}px;
`;
