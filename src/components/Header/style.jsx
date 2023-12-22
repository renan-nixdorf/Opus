import styled from 'styled-components';

export const Conatiner = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    border: none;
    background: none;
  }
  span,
  button {
    font-size: 1.75rem;
    margin: 24px;
    @media (max-width: 1000px) {
      font-size: 1.5rem;
    }
  }
`;
