import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
--background-green-900 :#012301;
--background-gray-800 :#2B2D2A;
--background-black-950 :#000000;

--color-green-500 :#00FF47;
--color-gray-300 :#D1D5DB;
}

* {
margin:0;
padding: 0;
box-sizing:border-box;
}

li {
  list-style:none;
}

a {
  text-decoration:none;
}

img {
  max-width:100%;
  display:block;
}

body {
  font-family: 'Roboto', sans-serif;
  background:var(--background-gray-800);
}

`;

export default GlobalStyle;

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;
