import styled from 'styled-components/native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen';

export const Container = styled.View`
  background-color: #FFD12F;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-horizontal: ${wp('10%')}px;
`;

export const InputContainer = styled.View`
  background-color: #fffcf0;
  justify-content: flex-start;
  height: ${wp('15%')}px;
  border-radius: ${wp('5%')}px;
  padding: ${wp('4%')}px;
  margin: ${wp('1%')}px;
  width: 100%;
`;

export const CredentialInput = styled.TextInput`
  flex: 1;
  
`;

export const ButtonText = styled.TextInput`
margin-horizontal: ${wp('5%')}px;
`;

export const AuthenticationButtonContainer = styled.View`
flex-direction: row;

`;


export const AuthenticationButton = styled.TouchableOpacity`
  background-color: ${(props) => props.color};
  flex:1;
  justify-content: center;
  align-items: center;
  height: ${wp('15%')}px;
  border-radius: ${wp('5%')}px;
  padding: ${wp('4%')}px;
  margin-horizontal: ${wp('1%')}px;
  margin-vertical: ${wp('2%')}px;
`;