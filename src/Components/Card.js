import React from 'react';
import styled from 'styled-components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
  ScrollView,
} from 'react-native';

export default function Card(props) {
  return (
    <>
      <Container>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <CardContainer>
            <Title>Original 50 Pokemon</Title>
          </CardContainer>

          <CardContainer>
            <Title>Original 50 Pokemon</Title>
          </CardContainer>

          <CardContainer>
            <Title>Original 50 Pokemon</Title>
          </CardContainer>

          <CardContainer>
            <Title>Original 50 Pokemon</Title>
          </CardContainer>
        </ScrollView>
      </Container>
    </>
  );
}

const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const CardContainer = styled.TouchableOpacity`
  width: ${wp('25%')}px;
  height: ${wp('25%')}px;
  justify-content: center;
  align-items: center;
  background-color: #ff5c00;
  border-radius: ${wp('5%')}px;
  margin-right: ${wp('2')}px;
`;

const Title = styled.Text`
  justify-content: center;
  align-items: center;
  font-size: ${hp('2%')}px;
`;
