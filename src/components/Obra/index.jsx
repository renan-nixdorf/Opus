import React from 'react';
import { Container, Content, ContentDesc, ContentImg } from './style';
import Header from '../Header';
import { useParams } from 'react-router-dom';
import Title from '../Title';
import Footer from '../Footer';
import { Context } from '../../Context';
import Head from '../Head';

const Obra = () => {
  const [item, setItem] = React.useState(null);
  const { data } = React.useContext(Context);
  const { id } = useParams();

  React.useEffect(() => {
    if (data) {
      setItem(data.filter((i) => i.name === id));
    }
  }, [data, id]);

  return (
    <Container>
      <Head title={item && item[0].name} />
      <div>
        <Header />
        <Title>Magnum Opus da Arquitetura</Title>
        <Content>
          <ContentImg>
            <img src={item && item[0].image} alt={item && item[0].name} />
          </ContentImg>
          <ContentDesc>
            <Title>{item && item[0].name}</Title>
            <p>{item && item[0].desc}</p>
          </ContentDesc>
        </Content>
      </div>
      <Footer />
    </Container>
  );
};

export default Obra;
