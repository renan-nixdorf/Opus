import React from 'react';
import { Container } from './style';
import Header from '../Header';
import Title from '../Title';
import SubTitle from '../SubTitle';
import Cards from '../Cards';
import Footer from '../Footer';
import Head from '../Head';

const Home = () => {
  return (
    <Container>
      <Head title="Home" />
      <div>
        <Header />
        <Title>Magnum Opus da Arquitetura</Title>
        <SubTitle>
          Um Olhar Distinto sobre as Grandes Edificações que Elevam o Espírito
          Humano
        </SubTitle>
        <Cards />
      </div>
      <Footer />
    </Container>
  );
};

export default Home;
