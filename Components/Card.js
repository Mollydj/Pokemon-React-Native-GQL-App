import React, { useState } from 'react';
import styled from 'styled-components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useQuery } from '@apollo/client';
import { GET_POKEMON_BY_NAME } from '../GraphQl/queries';
import { Text, View, FlatList, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Card(props) {
  return (
    <>
    <Container>
      <CardContainer>
        <Title>Original 50 Pokemon</Title>
      </CardContainer>

      <CardContainer>
        <Title>Original 50 Pokemon</Title>
      </CardContainer>

      <CardContainer>
        <Title>Original 50 Pokemon</Title>
      </CardContainer>
      </Container>
    </>
  );
}


const Container = styled.TouchableOpacity`
    flex-direction: row;
  justify-content: space-evenly;
  flex:1;
`;

const CardContainer = styled.TouchableOpacity`
  width: ${wp('25%')}px;
  height: ${wp('25%')}px;
  justify-content: center;
  align-items: center;
  background-color: #ff5c00;
  border-radius: ${wp('5%')}px;
`;

const Title = styled.Text`
  justify-content: center;
  align-items: center;
  font-size: ${hp('2%')}px;
`;
