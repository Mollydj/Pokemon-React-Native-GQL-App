import React, { useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  LogBox,
  SafeAreaView,
} from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_POKEMON_LIST } from '../../GraphQl/queries';
import styled from 'styled-components/native';
import PokemonCard from '../Components/PokemonCard';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Icon } from 'react-native-eva-icons';
import Card from '../Components/Card';
import { AuthenticationButton, AuthenticationButtonContainer, ButtonText, Container, CredentialInput, InputContainer } from '../Styling/SharedStyling';

export default function Authentication(props) {
  const { navigation } = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { data, error, loading, refetch } = useQuery(GET_POKEMON_LIST, {
    // variables: { limit: 151, offset: 0 },
    // variables: { limit: 6, offset: 0 },
  });

  LogBox.ignoreLogs(['Warning: ...']);

  if (loading) {
    return (
      <LoadingIndicatorContainer>
        <ActivityIndicator size='large' color='#FF5C00' />
      </LoadingIndicatorContainer>
    );
  }

  if (error) {
    console.log('Refetching...');
    // refetch();
  }

  const renderItem = ({ item }) => <PokemonCard navigation={navigation} pokemon={item} pokemonId={item.id.toString()} pokemonName={item.name}/>;

  return (
    <>
    <SafeAreaView style={{ backgroundColor: '#FFD12F'}} />
      <Container>
        <InputContainer>
        <CredentialInput
            onChangeText={(text) => setUsername(text)}
            value={username}
            placeholder={'Email'}
          />
                  </InputContainer>
                  <InputContainer>
        <CredentialInput
            onChangeText={(text) => setPassword(text)}
            value={password}
            placeholder={'Password'}
          />
</InputContainer>

<AuthenticationButtonContainer color={'#EC4F3F'}>
  
  <AuthenticationButton color={'#EC4F3F'}>
  <ButtonText>Register</ButtonText>
  </AuthenticationButton>
  <AuthenticationButton color={'#F5C312'}>
  <ButtonText >Login</ButtonText>
  </AuthenticationButton>
  </AuthenticationButtonContainer>

      </Container>
    </>
  );
}





const LoadingIndicatorContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const HeaderSection = styled.View`
  background-color: #ffd12f;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding: ${wp('4%')}px;
`;

const Title = styled.Text`
  color: #606060;
  /* flex-direction: column; */
  padding: 20px;
  font-size: ${wp('8')}px;
`;

const PokemonSection = styled.View`
  background-color: #fae392;
  padding: ${wp('2')}px;
  border-radius: ${hp('4%')}px;
  /* overflow: scroll; */
  /* margin-bottom: ${wp('1%')}px; */
  top: ${hp('-4%')}px;
  margin-bottom: ${hp('-4%')}px;
  /* position: absolute; */
  flex: 3;
  /* width: 100%; */
  /* justify-content: center; */
  /* align-self: center; */
  /* align-items: center; */
`;
