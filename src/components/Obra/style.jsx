import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  flex-direction: column;
  position: relative;
  height: calc(100vh - 20px);
`;

export const Content = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, 550px);
  justify-content: center;
  gap: 2rem;
  @media (max-width: ${({ theme }) => theme.large}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ContentImg = styled.div`
  width: 550px;
  height: 450px;
  background: #ddd;
  border-radius: 0.4rem;
  overflow: hidden;
  img {
    object-position: center;
    object-fit: cover;
    height: 100%;
    /* filter: grayscale(100); */
  }
  @media (max-width: ${({ theme }) => theme.medium}) {
    width: 450px;
    height: 350px;
  }
  @media (max-width: ${({ theme }) => theme.minimal}) {
    width: 300px;
    height: 250px;
  }
`;

export const ContentDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  @media (max-width: ${({ theme }) => theme.large}) {
    align-items: center;
    text-align: center;
  }
`;
