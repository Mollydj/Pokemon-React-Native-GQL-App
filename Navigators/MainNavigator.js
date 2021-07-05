import React from 'react';
import PokemonList from '../Components/PokemonList';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="PokemonList" component={PokemonList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
