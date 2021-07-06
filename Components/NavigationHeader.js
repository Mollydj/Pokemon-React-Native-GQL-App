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
      <LeftWrapper>{leftButton}</LeftWrapper>
      <TitleWrapper>
        <Title color={color} hasSubtitle={headerSubTitle}>
          {headerTitle}
        </Title>
        {headerButton}
      </TitleWrapper>
      <RightWrapper>{rightButton}</RightWrapper>
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  padding-left: ${hp('0.5%')}px;
  padding-right: ${hp('0.5%')}px;
`;

const LeftWrapper = styled.View`
  width: ${wp('26%')}px;
  align-items: flex-start;
  justify-content: center;
`;

const RightWrapper = styled.View`
  width: ${wp('26%')}px;
  align-items: flex-end;
  justify-content: center;
`;

const TitleWrapper = styled.View`
  width: ${wp('48%')}px;
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
  flex: 1;
  justify-content: center;
`;

const Subtitle = styled.Text`
  font-weight: 300;
  font-size: ${hp('1.3%')}px;
  text-align: center;
`;
