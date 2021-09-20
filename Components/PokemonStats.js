import React from 'react';
import styled from 'styled-components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { FlatList, Text } from 'react-native';

export default function PokemonStats(props) {
  const { data, pokemonBackgroundColor } = props;

  return (
    <>
      <FlatList
        scrollEnabled={true}
        data={data}
        key={({index}) => index}
        renderItem={({ item }) => (
          <Stat>
            <Text>
              {item.stat.name} {item.base_stat}
            </Text>
          </Stat>
        )}
      />
    </>
  );
}

const Stat = styled.View`
  margin: ${hp('1%')}px;
`;
