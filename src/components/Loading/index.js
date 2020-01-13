import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Container, LoadingText } from './Loading.styles';

const Loading = () => {
  return (
    <Container>
      <ActivityIndicator size="large" color="white" />
      <LoadingText>Loading...</LoadingText>
    </Container>
  );
};

export default Loading;
