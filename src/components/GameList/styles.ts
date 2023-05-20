import styled from "styled-components";

export const CardsGameContainer = styled.div`
  padding: 30px;
  display: grid;
  justify-content: center;

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 60px;
  }
`;
