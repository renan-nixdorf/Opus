import React from 'react';
import { Container } from './style';
import Header from '../Header';
import Title from '../Title';

const NotFound = () => {
  return (
    <Container>
      <Header />
      <Title>Erro: 404 - Not Found</Title>
    </Container>
  );
};

export default NotFound;
