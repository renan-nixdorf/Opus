import React from 'react';
import { Container, Content } from './style';
import { Link } from 'react-router-dom';
import { Context } from '../../Context';

const Cards = () => {
  const { data } = React.useContext(Context);

  return (
    <Container>
      {data &&
        data.map((item) => (
          <Link to={`obra/${item.name}`} key={item.id}>
            <Content>
              <div>
                <img src={item.image} alt={item.name} />
              </div>
              <p>{item.name}</p>
            </Content>
          </Link>
        ))}
    </Container>
  );
};

export default Cards;
