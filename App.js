import React, { useState } from 'react';
import {
  Button,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import { ApolloProvider, useQuery, gql } from '@apollo/client';
import { apolloClient } from './apollo';
import { GET_POKEMON_LIST } from './GraphQl/queries';
import styled from 'styled-components/native';
import PokemonCard from './Components/PokemonCard';
import PokemonList from './Components/PokemonList';

function RootComponent() {
  return (
    <>
      <SafeAreaView />
      <PokemonList />
    </>
  );
}

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <RootComponent />
    </ApolloProvider>
  );
}
