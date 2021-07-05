import React from 'react';
import PokemonList from '../Components/PokemonList';
import PokemonDetails from '../Components/PokemonDetails';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName='PokemonList'>
        <Stack.Screen name="PokemonList" component={PokemonList} />
        <Stack.Screen name="PokemonDetails" component={PokemonDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
