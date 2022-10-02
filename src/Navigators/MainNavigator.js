import React from 'react';
import PokemonList from '../Screens/PokemonList';
import PokemonDetails from '../Screens/PokemonDetails';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Authentication from '../Screens/Authentication';

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName='Authentication'>
        <Stack.Screen name="Authentication" component={Authentication}  options={{ headerShown: false }} />
        <Stack.Screen name="PokemonList" component={PokemonList}  options={{ headerShown: false }} />
        <Stack.Screen name="PokemonDetails" component={PokemonDetails}  options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
