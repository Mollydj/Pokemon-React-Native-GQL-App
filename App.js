import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './apollo';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import MainNavigator from './src/Navigators/MainNavigator';

const Stack = createStackNavigator();

function RootComponent() {
  return (
    <>      
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
