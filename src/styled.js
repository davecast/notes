import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div`
  padding: 40px 0;
  max-width: 575px;
  width: 90%;
  margin: 0 auto;
`;

export const Grid = styled.div`
  display: grid;
  grid-template: 1fr / repeat(2, 1fr);
  grid-gap: 15px;
`;

const GlobalStyled = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
  h2, p {
    margin: 0;
  }
`;

export default GlobalStyled;
