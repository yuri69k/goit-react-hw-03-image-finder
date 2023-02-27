import styled from 'styled-components';

export const ImageList = styled.ul`
  margin: 0 auto;
  display: grid;
  gap: 25px;
  padding: 0 30px;
  @media screen and (min-width: 480px) {
    width: 480px;
    grid-template-columns: 1fr;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 1280px) {
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;