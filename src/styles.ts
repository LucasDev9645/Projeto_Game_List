import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
--background-green-900 :#012301;
--background-gray-800 :#2B2D2A;
--background-black-950 :#000000;
--background-green-400 :#59FF59;

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

export default GlobalStyles;

export const ContainerStyles = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export const CardGame = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid var(--background-green-900);
  text-align: center;
  width: 11.25rem;
  height: 18.125rem;
  border-radius: 10px;
  padding: 0.625rem;

  img {
    max-width: 150px;
    border-radius: 5px;
  }

  h3 {
    color: var(--color-green-500);
    padding: 0.3rem;
    font-weight: 700;
    font-size: 1rem;
  }

  p {
    color: var(--color-green-500);
    font-weight: 700;
    font-size: 0.875rem;
  }

  @media (max-width: 768px) {
    width: 13.75rem;
    height: 20.625rem;
    padding: 1rem;

    img {
      max-width: 180px;
    }
  }
`;
