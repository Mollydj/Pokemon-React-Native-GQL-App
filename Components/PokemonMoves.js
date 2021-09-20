import React from 'react';
import styled from 'styled-components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { FlatList, Text } from 'react-native';

export default function PokemonMoves(props) {
  const { data, pokemonBackgroundColor } = props;
  //TO DO: ADD MOVE DETAILS MODAL HERE

  return (
    <>
        <FlatList
          scrollEnabled={true}
          showsHorizontalScrollIndicator={false}
          data={data}
          key={({index}) => index}
          renderItem={({ item }) => <Move><Text>{item.move.name}</Text></Move>}
        />
    </>
  );
}

const Move = styled.View`
  margin: ${hp('1%')}px;
`;
