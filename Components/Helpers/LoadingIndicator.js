import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components';

export default function LoadingIndicator(props) {
    return (
      <LoadingIndicatorContainer>
        <ActivityIndicator size='large' color='#ff0000' />
      </LoadingIndicatorContainer>
    );
}

const LoadingIndicatorContainer = styled.View`
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;
