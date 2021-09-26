/* eslint-disable import/no-unresolved */
import React from 'react';
import styled from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function NavigationHeader(props) {
  const {
    leftButton,
    headerButton,
    headerSubTitle,
    headerTitle,
    rightButton,
    color,
  } = props;

  return (
    <Container>
      <IconWrapper>{leftButton}</IconWrapper>
      <TitleWrapper>
        <Title color={color} hasSubtitle={headerSubTitle}>
          {headerTitle}
        </Title>
        {headerButton}
      </TitleWrapper>
      <IconWrapper>{rightButton}</IconWrapper>
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  padding-left: ${wp('1.5%')}px;
  padding-right: ${wp('1.5%')}px;
  justify-content: space-between;
`;

const IconWrapper = styled.View`
  align-items: flex-start;
  justify-content: center;
`;

const TitleWrapper = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: ${hp('4%')}px;
  color: ${(props) => props.color};
  text-align: center;
  text-transform: capitalize;
  justify-content: center;
`;
