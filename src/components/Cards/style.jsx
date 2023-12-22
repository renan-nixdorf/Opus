import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, 240px);
  justify-content: center;
  gap: 1rem;
  position: relative;
`;

export const Content = styled.article`
  div {
    width: 240px;
    height: 240px;
    background: #ddd;
    border-radius: 0.4rem;
    overflow: hidden;
  }
  img {
    object-position: center;
    object-fit: cover;
    height: 100%;
  }
  p {
    font-family: sans-serif;
    font-size: 1rem;
  }
`;
