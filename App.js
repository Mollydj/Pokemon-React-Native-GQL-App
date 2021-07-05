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
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import MainNavigator from './Navigators/MainNavigator';

const Stack = createStackNavigator();

function RootComponent() {
  return (
    <>
      <SafeAreaView style={{ backgroundColor: '#FFD12F'}} />
      <MainNavigator />
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
