import React from 'react';
import Rating from './Rating';
import { Container, Header, Content, Button, Text } from 'native-base';

export default function App() {

  const isValid = true;

  return (
    <Container>
      <Header />
      <Content>
        <Rating rating='1' />
        <Rating rating='2' />
        <Rating rating='3' />
        <Rating rating='4' />
        <Rating rating='5' />   
      </Content>
    </Container>
  );
}
